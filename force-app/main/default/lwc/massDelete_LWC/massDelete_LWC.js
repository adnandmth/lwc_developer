import getContactList from '@salesforce/apex/MassDeleteContacts.getContactList';
import deleteSelectedContacts from '@salesforce/apex/MassDeleteContacts.deleteSelectedContacts'; '@salesforce/apex/MassDeleteContacts.getContactList';
import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class MassDelete_LWC extends LightningElement {

    @wire (getContactList) contacts;
    @track selectedContactIdList = [];
    @track columns = [
        {
            label:'First Name',
            fieldName:'FirstName',
            type:'text'
        },
        {
            label:'Last Name',
            fieldName:'LastName',
            type:'text'
        },
        {
            label:'Phone',
            fieldName:'Phone',
            type:'phone'
        },
    ];

    deleteSelRecords(){
        deleteSelectedContacts({selContactIdList:this.selectedContactIdList})
        .then(result => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Selected Contacts were deleted!',
                    variant: 'Success'
                }),
            );
            this.template.querySelector('lightning-datatable').selectedRows = [];

            return refreshApex(this.contacts);
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting records',
                    message: error.body.pageErrors[0].message,
                    variant: 'error'
                }),
            );
            console.log('error', JSON.stringify(this.error));
        })
    }

    prepareSelectedRows(event){

        const selectedRows  = event.detail.selectedRows;
        this.selectedContactIdList = [];

        for(let i = 0; i < selectedRows.length; i++){
            this.selectedContactIdList.push(selectedRows[i].Id);
        }
        console.log(this.selectedContactIdList);
    }
}