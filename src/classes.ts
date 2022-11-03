abstract class Department {
    // private name: string;
    // private id : string
    static year = 2020;
    protected employees: string[]= []

    constructor(protected readonly id: string, protected name: string){
        // this.name = n;
        // this.id = id;

    }

    abstract describe(this: Department): void;

    addEmployee(empl: string){
        this.employees.push(empl);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, name: string, public admins: string[]) {
        super(id, name);
    }

    describe() {
        console.log(' it department');
    }
}

class AccountDepartment extends Department{
    private lastReport: string;
    private static instance: AccountDepartment;

    private constructor(id: string, private reports : string[]){
        super(id, 'Accounting Department');
        this.lastReport = reports[0];
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    get mostRecentReport(){
        if (this.lastReport){
            return this.lastReport;
        }

        throw new Error('no reports');
    }

    static getAccountInstance(){
       if(AccountDepartment.instance){
            return this.instance;
       }
       return this.instance = new AccountDepartment('id2', [])
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if (name === 'iliana'){
            return;
        }

        this.employees.push(name);
        
    }

    describe() {
        console.log(`this is AccountDepartment ${this.id}`)
    }

    static addDescription (text: string){
        return {description: text};
    }
}

// const deparment1 = new Department('id0', 'Base Department');
// console.log(deparment1);
// deparment1.describe();
// const departmentCopy = { name: 'Test2', describe: deparment1.describe } ;
// departmentCopy.describe();

// deparment1.addEmployee('iliana');
// deparment1.addEmployee('gosho');

// deparment1.printEmployeeInformation();

const deparment2 = new ITDepartment('id1', 'IT Department',  ['Iliana']);
deparment2.addEmployee('Employee1');
deparment2.addEmployee('Employee2');
deparment2.describe();
deparment2.printEmployeeInformation();
console.log(deparment2);


// const deparment3 = new AccountDepartment('id2', []);
const deparment3 = AccountDepartment.getAccountInstance();
const deparment4 = AccountDepartment.getAccountInstance();
console.log(deparment3);
console.log(deparment4);
deparment3.addReport('this is first report');
deparment3.addEmployee('iliana');
deparment3.addEmployee('iliana2');
deparment3.printEmployeeInformation();
console.log(deparment3);
deparment3.mostRecentReport = 'First Report';
deparment3.mostRecentReport = 'Second Report';
console.log(deparment3.mostRecentReport);
console.log(AccountDepartment.year);
console.log(AccountDepartment.addDescription('some desciption'));
deparment3.describe();