import {PatientsRegister} from './patientsRegister';
import { Drugs } from './drugsRegister';
export class Quarantine {

    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';
    patients:PatientsRegister = {};
    drugs:Drugs[] = [];
    fatal:Boolean = false;
    constructor(patients: PatientsRegister) {
        this.patients = patients;
        this.drugs = [];
    }

    public setDrugs(drugs: Drugs[]): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        for (const drug of this.drugs) {
            switch (drug) {
                case Drugs.As:
                    this.patients.F = Math.max(this.patients.F - 1, 0);
                    break;
                case Drugs.An:
                    this.patients.T = Math.max(this.patients.T - 1, 0);
                    break;
                case Drugs.I:
                    if (this.patients.D > 0) {
                        this.patients.D--;
                    }
                    break;
                case Drugs.P:
                    if (this.drugs.includes(Drugs.As)) {
                        this.patients.X += this.patients.F;
                        this.patients.F = 0;
                    } else {
                        this.patients.F = Math.max(this.patients.F - 1, 0);
                    }
                    break;
                default:
                    break;
            }
        }
        if (this.drugs.includes(Drugs.I) && this.drugs.includes(Drugs.An)) {
            this.patients.F += this.patients.H;
            this.patients.H = 0;
        }
    }
    public report(): PatientsRegister {
        return this.patients;
    }
}
