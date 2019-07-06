import { EmployeeType } from './employeeType';

export class LoanCalculator {

    private employee: Employee;

    public setLoanCalculatorEmployeeType(employeeType: EmployeeType) {
        let str: string = `${EmployeeType[employeeType]}`;
        str = str[0] + str.slice(1).toLowerCase();
        this.employee = eval(`${`new ${str}()`}`);
    }

    public getMonthLoan(): number {
        return this.employee.getMonthLoan();
    }

    public getLevel(): number {
        return this.employee.getLevel();
    }

}

export abstract class Employee {

    abstract getMonthLoan() : number;
    abstract getLevel(): number;
}

export class Junior extends Employee {
    public getMonthLoan(): number {
        return 100.0
    }

    public getLevel(): number {
        return 1;
    }

}

export class Medior extends Employee {
    public getMonthLoan(): number {
        return 1000.0
    }
  
    public getLevel(): number {
        return 5;
    }
  }
  
  export class Senior extends Employee {
    public getMonthLoan(): number {
        return 10000.0
    }
  
    public getLevel(): number {
        return 8;
    }
  }