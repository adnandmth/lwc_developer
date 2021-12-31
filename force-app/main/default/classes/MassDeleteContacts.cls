/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-27-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class MassDeleteContacts {
   
    @AuraEnabled
    public static List<Contact> getContactList(){
        try {
            return [
                SELECT Id, FirstName, LastName, Email
                FROM Contact
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void deleteSelectedContacts(List<Id> selContactIdList){

        List<Contact> contactList = new List<Contact>();
        contactList = [
            SELECT Id
            FROM Contact
            WHERE Id IN: selContactIdList
        ];
        
        if(contactList != null && contactList.size() > 0){
            try {
                delete contactList;
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    }
}
