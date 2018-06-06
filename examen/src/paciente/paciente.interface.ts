export class Paciente {
    constructor(public nombres: string,
                public apellidos: string,
                public fecha_de_nacimiento: string,
                public hijos: number,
                public tieneSeguro: boolean,
                public id: number){
    }
}