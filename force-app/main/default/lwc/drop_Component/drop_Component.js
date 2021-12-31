import { LightningElement, track } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'

export default class Drop_Component extends LightningElement {

    fields = [ACCOUNT_NAME, ACCOUNT_INDUSTRY, ACCOUNT_PHONE];
    @track accountId;
    @track message = 'Drop an Account here';

    dropElement(event){
        this.accountId = event.dataTransfer.getData('account_id');
        this.message = '';
    }

    allowDrop(event){
        event.preventDefault();
    }
}