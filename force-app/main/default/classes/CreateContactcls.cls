/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-24-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class CreateContactcls {

    @AuraEnabled
    public static string createContact(Contact contObj){

        System.debug('contact: ' + contObj.firstName);
        try {
            insert contObj;
            return contObj.Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Contact> retrieveContacts(){

        try {
            return [
                SELECT Id, FirstName, LastName, Phone
                FROM Contact
                LIMIT 5
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
