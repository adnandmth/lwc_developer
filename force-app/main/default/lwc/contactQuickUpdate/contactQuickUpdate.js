import { api, LightningElement } from 'lwc';
import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from '@salesforce/schema/Contact.Email';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactQuickUpdate extends LightningElement {

    @api recordId;
    @api objectApiName;
    fieldlist = [
        Contact_FirstName,
        Contact_LastName,
        Contact_Phone,
        Contact_Email
    ];

    handleContactUpdate(event){

        // A component can send a toast notification that pops up to alert users of 
        // a success, error, or warning. A toast can also simply provide information.
        const evt = new ShowToastEvent({
            title: 'Contact was updated',
            message: 'Contact Record: ' + event.detail.fields.LastName.values + ' is successfully updated',
            variant: 'Success',
        });
        this.dispatchEvent(evt);
    }
}