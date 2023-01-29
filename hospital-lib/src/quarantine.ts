import {PatientsRegister} from './patientsRegister';
import { Drugs } from './drugsRegister';
export class Quarantine {

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';
    patients:PatientsRegister = {};
    actionsPatients:any = {};
    drugs:Array<string> = [];
    fatal:Boolean = false;
    constructor(patients: PatientsRegister) {
        this.patients = patients;
        this.drugs = [];
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        this.calculateActions();
        let newPatients:PatientsRegister = {
            X: this.patients['D'],
            F: 0, H: 0, D: 0, T: 0, 
        };
        for(let groupPatient in this.patients){
            switch(this.actionsPatients[groupPatient]){
                case 'Dead':
                    newPatients['X'] += this.patients[groupPatient];
                    break;
                case 'Cured':
                    newPatients['H'] += this.patients[groupPatient];
                    break;
                case 'Remains':
                    newPatients[groupPatient] += this.patients[groupPatient];
                    break;
                case 'Fever':
                    newPatients['F'] += this.patients[groupPatient];
                    break;
            }
        }
        this.patients = JSON.parse(JSON.stringify(newPatients));
    }
    public report(): PatientsRegister {
        return this.patients;
    }
    public calculateActions(){
        //action can be -> 
        // 1. Dead
        // 2. Fever
        // 3. Remains
        // 4. Cured
        
        for(let groupPatient in this.patients){
            if(this.drugs.includes('I') && this.drugs.includes('As')){
                this.actionsPatients[groupPatient] = 'Dead';
            }else{
                this.actionsPatients[groupPatient] = 'Remains';
                switch(groupPatient){
                    case 'D':
                        if(!this.drugs.includes('I')){
                            this.actionsPatients[groupPatient] = 'Dead'
                        }
                        break;
                    case 'F':
                        if(this.drugs.includes('As') || this.drugs.includes('P')){
                            this.actionsPatients[groupPatient] = 'Fever'
                        }
                        break;
                    case 'T':
                        if(this.drugs.includes('An')){
                            this.actionsPatients[groupPatient] = 'Cured'
                        }
                        break;
                }
            }

        }
    }
}
