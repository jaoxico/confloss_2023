import {tOccupation} from "./type_interface";

class cEmployee {
    private Name: string;
    private Age: number;
    private Occupation: tOccupation;
    constructor(Name: string, Age: number, Occupation: tOccupation) {
        this.setName(Name);
        this.setAge(Age);
        this.setOccupation(Occupation);
    }
    setName(Name: string): void {
        this.Name = Name;
    }
    getName(): string {
        return this.Name;
    }
    setAge(Age: number): void {
        this.Age = Age;
    }
    getAge(): number {
        return this.Age;
    }
    setOccupation(Occupation: tOccupation): void {
        this.Occupation = Occupation;
    }
    getOccupation(): tOccupation {
        return this.Occupation;
    }
}


const Employee = new cEmployee('Aristóteles', 30, 'Desenvolvedor(a) Sênior');

console.log(Employee)

Employee.setName(`${Employee.getName()} - Promovido`);
Employee.setAge(40);
Employee.setOccupation('Analista');

console.log(`Name: ${Employee.getName()}`)
console.log(`Age: ${Employee.getAge()}`)
console.log(`Occupation: ${Employee.getOccupation()}`)
