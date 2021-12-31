/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-29-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class AccountCreationController {
    public AccountCreationController() {

    }

    @AuraEnabled
    public static Account createAccount(Account accountRecObj ){
        try {
            insert accountRecObj;
            return accountRecObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> createAccounts(List<Account> accountList){
        try {
            insert accountList;
            return accountList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
