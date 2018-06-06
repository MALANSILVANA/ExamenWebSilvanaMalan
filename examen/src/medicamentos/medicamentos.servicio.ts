import { Injectable } from '@nestjs/common';
import { Medicamento } from './medicamentos.interface';

@Injectable()
export class ServicioMedicamento{
    private medicamentos: Medicamento[]= [];

    crearMedicamento(medicamento: Medicamento){
        this.medicamentos.push(medicamento);
    }

    mostrarTodos(){
        return this.medicamentos;
    }

    mostrarMedicamentosPorNombre(nombre: string){
        const indice = this.medicamentos.findIndex((Medicamento) => Medicamento.nombre === nombre);
        return this.medicamentos[indice];
    }

    modificarMedicamentoPorNombre(gramosAingerir: string, nombre: string, composicion: string,
                                  usadoPara: string, fechaCaducidad: string, numeroPastillas: number, pacienteId: number){
                                      const indice = this.medicamentos.findIndex((Medicamento) => Medicamento.nombre === nombre);
                                      const medicamentoActualizado = new Medicamento(gramosAingerir, nombre, composicion, usadoPara,
                                        fechaCaducidad, numeroPastillas, pacienteId);
                                      this.medicamentos[indice] = medicamentoActualizado;
    }
}
