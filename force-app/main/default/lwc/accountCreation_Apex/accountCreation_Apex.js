import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCreation_Apex extends LightningElement {

    @track accountId;
    @track error;
    @track accountRecord = {
        Name:ACCOUNT_NAME,
        Type:ACCOUNT_TYPE,
        Phone:ACCOUNT_PHONE
    };

    handleNameChange(event){
        this.accountRecord.Name = event.target.value;
    }

    handleTypeChange(event){
        this.accountRecord.Type = event.target.value;
    }

    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value;
    }

    handleSaveAccount(){
        createAccount({accountRecObj:this.accountRecord})
            .then(result => {
                // empty the variable only when success
                this.accountRecord = {};
                this.accountId = result.Id;
                const toastEvent = new ShowToastEvent({
                    title:'Success',
                    message:'Account record was created',
                    variant:'success'
                });
                this.dispatchEvent(toastEvent);
            })
            .catch(error => {
                this.error = error.message;
            });
    }
}