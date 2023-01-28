import {PatientsRegister} from './patientsRegister';

export class Quarantine {

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';
    patients:PatientsRegister = {};
    drugs:Array<string> = [];
    constructor(patients: PatientsRegister) {
        this.patients = patients;
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        for(let patient in Object.keys(this.patients)){
            console.log(patient);
        }
    }
    public report(): PatientsRegister {
        return this.patients;
    }
}
