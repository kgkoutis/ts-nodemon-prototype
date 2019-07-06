import { EmployeeType } from './employeeType';
import { LoanCalculator } from './LoanCalculator';

export class Program {

    constructor(public loanCalculator: LoanCalculator) {

        this.loanCalculator.setLoanCalculatorEmployeeType(EmployeeType.MEDIOR);
        console.log("Loan of medior (level " + this.loanCalculator.getLevel() + ") is: " + this.loanCalculator.getMonthLoan());

        this.loanCalculator.setLoanCalculatorEmployeeType(EmployeeType.JUNIOR);
        console.log("Loan of medior (level " + this.loanCalculator.getLevel() + ") is: " + this.loanCalculator.getMonthLoan());
    }

}


let loanCalculator = new LoanCalculator(); 
new Program(loanCalculator);