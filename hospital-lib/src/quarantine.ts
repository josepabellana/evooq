import {PatientsRegister} from './patientsRegister';
import { Drugs } from './drugsRegister';
export class Quarantine {

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';
    patients:PatientsRegister = {};
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
        for(let groupPatient in this.patients){
            switch(groupPatient){
                case 'D':
                    if(!this.drugs.includes('I')){
                        this.patients['X']+=this.patients['D'];
                        this.patients['D']-=this.patients['D'];
                    }
                    break;
                case 'F':
                    if(this.drugs.includes('As') || this.drugs.includes('P')){
                        this.patients['H'] += this.patients['F'];
                        this.patients['F'] -= this.patients['F'];
                    }
                case 'T':
                    if(this.drugs.includes('An')){
                        this.patients['H'] += this.patients['T'];
                        this.patients['T'] -= this.patients['T'];
                    }
            }
        }
    }
    public report(): PatientsRegister {
        return this.patients;
    }
}
