/**
 * @description       : 
 * @author            : Adnan Zahry
 * @group             : 
 * @last modified on  : 12-24-2021
 * @last modified by  : Adnan Zahry
**/
public with sharing class CalculatorController {

    @AuraEnabled
    public static Decimal calculateValues(Decimal firstNumber, Decimal secondNumber){

        Decimal sum;
        try {
            sum = firstNumber + secondNumber;
            return sum;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}