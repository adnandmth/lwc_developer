import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCreateSampleComp extends NavigationMixin (LightningElement) {

    objectApiName = 'Account';
    fieldList = [
        Account_Name,
        Account_Type,
        Account_Industry
    ];

    handleAccountCreation(event){

        // A component can send a toast notification that pops up to alert users of 
        // a success, error, or warning. A toast can also simply provide information.
        const evt = new ShowToastEvent({
            title: 'Account was created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'Success',
        });
        this.dispatchEvent(evt);
        // https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation
        this[NavigationMixin.Navigate]({
            type: 'standard_recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}