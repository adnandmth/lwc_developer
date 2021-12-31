import getAccountsWithoutCache from '@salesforce/apex/AccountController.getAccountsWithoutCache';
import { LightningElement, track } from 'lwc';

export default class DataDisplayUsingImperative extends LightningElement {

    @track accountRecords;
    @track errors;
    @track columns = [
        { label: 'Label', fieldName: 'Name', type: 'text'},
        { label: 'Phone', fieldName: 'Phone', type: 'phone'},
        { label: 'Industry', fieldName: 'Industry', type: 'text'}
    ]

    connectedCallback(){
        getAccountsWithoutCache()
            .then(result=>{
                this.accountRecords = result;
            })
            .catch(error=>{
                this.errors = error;
            });
    }
} 