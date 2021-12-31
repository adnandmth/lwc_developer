import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
export default class DisplayDataUsingWire extends LightningElement {

    @track data;
    // wire method with apex callable method and take the returned object
    @wire(getAccounts) accountRecords({error, data}){
        if(data){
            this.data = data;
        }else if(error){
            this.data = undefined;
            console.log(error);
        }
    }
}