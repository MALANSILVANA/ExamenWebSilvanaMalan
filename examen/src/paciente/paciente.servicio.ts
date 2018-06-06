import {Injectable} from '@nestjs/common';
import { Paciente } from './paciente.interface';
@Injectable()
export class ServicioPaciente {
    private pacientes: Paciente[] = [];

    crearPaciente(paciente: Paciente){
        this.pacientes.push(paciente);
    }

    mostrarPacientes(){
        return this.pacientes;
    }
    mostrarPacienteporId(id: number){
        const indice = this.pacientes.findIndex((Paciente) => Paciente.id ===  id);
        return this.pacientes[indice];
    }

    modificarPacientePorId(nombres: string,
                           apellidos: string,
                           fecha_de_nacimiento: string,
                           hijos: number,
                           tieneSeguro: boolean,
                           id: number){
const indice = this.pacientes.findIndex((paciente: Paciente) => paciente.id === id);
const pacienteActualizado = new Paciente(
    nombres,
    apellidos,
    fecha_de_nacimiento,
    hijos,
    tieneSeguro,
    id);
this.pacientes[indice] = pacienteActualizado;
}
}