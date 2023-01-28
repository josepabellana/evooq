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
        let newPatients:PatientsRegister = {};
        for(let groupPatient in this.patients){
            if(groupPatient !== 'X') this.evaluateMedicines(newPatients, groupPatient,this.drugs);
        }
    }
    public report(): PatientsRegister {
        return this.patients;
    }
    public evaluateMedicines(newPatients:PatientsRegister, patientType:string,drugs: Array<string>){
        
    }
}
