/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-22-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class CalculateNumbers {
    public CalculateNumbers() {

    }

    @AuraEnabled
    public static Integer getSum(Integer firstNum, Integer secondNum){
        try {
            return firstNum + secondNum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
