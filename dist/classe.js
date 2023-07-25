"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cEmployee {
    constructor(Name, Age, Occupation) {
        this.setName(Name);
        this.setAge(Age);
        this.setOccupation(Occupation);
    }
    setName(Name) {
        this.Name = Name;
    }
    getName() {
        return this.Name;
    }
    setAge(Age) {
        this.Age = Age;
    }
    getAge() {
        return this.Age;
    }
    setOccupation(Occupation) {
        this.Occupation = Occupation;
    }
    getOccupation() {
        return this.Occupation;
    }
}
const Employee = new cEmployee('Aristóteles', 30, 'Desenvolvedor(a) Sênior');
console.log(Employee);
Employee.setName(`${Employee.getName()} - Promovido`);
Employee.setAge(40);
Employee.setOccupation('Analista');
console.log(`Name: ${Employee.getName()}`);
console.log(`Age: ${Employee.getAge()}`);
console.log(`Occupation: ${Employee.getOccupation()}`);
//# sourceMappingURL=classe.js.map