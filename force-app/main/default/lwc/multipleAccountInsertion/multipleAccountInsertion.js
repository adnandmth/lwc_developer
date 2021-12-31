import { LightningElement, track } from 'lwc';
import saveAccounts from '@salesforce/apex/AccountCreationController.createAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MultipleAccountInsertion extends LightningElement {

    @track keyIndex = 0;
    @track accountRecList = [
        {
            Name:'',
            Industry:'',
            Phone:''
        }
    ]

    changeHandler(event){

        if(event.target.name === 'accName'){
            this.accountRecList[event.target.accessKey].Name = event.target.value;
        }else if(event.target.name === 'accIndustry'){
            this.accountRecList[event.target.accessKey].Industry = event.target.value;
        }else if(event.target.name === 'accPhone'){
            this.accountRecList[event.target.accessKey].Phone = event.target.value;
        }
    }

    addRow(){

        this.keyIndex++;
        this.accountRecList.push({
            Name:'',
            Industry:'',
            Phone:''
        })
    }

    saveMultipleAccounts(){

        saveAccounts({accountList: this.accountRecList})
            .then(result => {
                this.message = result;
                this.error = undefined;
                this.accountRecList.forEach(function(item){
                    item.Name = '';
                    item.Industry = '';
                    item.Phone = '';
                })

                if(this.message !== undefined){
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Accounts were created',
                            varian: 'success',
                        }),
                    );
                }

                console.log(JSON.stringify(result));
                console.log('result', this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating records',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log('error', JSON.stringify(this.error));
            })
    }

    removeRow(event){

        if(this.accountRecList.length >= 1){
            this.accountRecList.splice(event.target.accessKey, 1);
            this.keyIndex--;
        }
    }
}