import { Module } from '@nestjs/common';
import { ControladorMedicamento } from './medicamentos.controlador';
import { ServicioMedicamento } from './medicamentos.servicio';

@Module({
    controllers: [ControladorMedicamento],
    providers: [ServicioMedicamento],
},
)
export class MedicamentoModulo{

}