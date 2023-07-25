export type tOccupation = 'Analista' | 'Desenvolvedor(a) Júnior' | 'Desenvolvedor(a) Pleno' | 'Desenvolvedor(a) Sênior';

export interface iEmployee {
    Name: string;
    Age: number;
    Occupation: tOccupation;
}

const Employee: iEmployee = {
    Name: 'Aristóteles',
    Age: 25,
    Occupation: 'Desenvolvedor(a) Pleno'
};

console.log(Employee)



