export class Medicamento{
    constructor(public gramosAingerir: string,
                public nombre: string,
                public composicion: string,
                public usadoPara: string,
                public fechaCaducidad: string,
                public numeroPastillas: number,
                public pacienteId: number){
    }
}