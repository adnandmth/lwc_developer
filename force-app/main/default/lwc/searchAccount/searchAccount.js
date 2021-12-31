import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccountString';
const DELAY = 300;

export default class SearchAccount extends LightningElement {

    accountName = '';
    @track error = '';
    @track accountList = [];
    
    @wire(getAccount, {actName:'$accountName'})
    retrieveAccounts({error, data}){
        if(data){
            this.accountList = data;
        }else if(error){
            this.error = error;
        }
    }

    handleKeyChange(event){
      const searchString = event.target.value;
      window.clearTimeout(this.delayTimeout);
      this.delayTimeout = setTimeout(() => {
          this.accountName = searchString;
      }, DELAY);  
    }
}