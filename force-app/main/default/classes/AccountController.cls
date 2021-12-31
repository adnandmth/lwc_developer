/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-30-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [
                SELECT Id, Name, type, Industry, Phone
                FROM Account
                LIMIT 10
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> getAccountsWithoutCache(){
        try {
            return [
                SELECT Id, Name, type, Industry
                FROM Account
                LIMIT 10
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Account createAccount(Account accountRecObj){
        try {
            insert accountRecObj;
            return accountRecObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountString(String actName){

        String keyString = '%' + actName + '%';
        try {
            return [
                SELECT Id, Name
                FROM Account
                WHERE Name LIKE:keyString
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
