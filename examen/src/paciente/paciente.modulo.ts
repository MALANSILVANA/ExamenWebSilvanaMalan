import { Module } from '@nestjs/common';
import { ControladorPaciente } from './paciente.controlador';
import { ServicioPaciente } from './paciente.servicio';

@Module({
    controllers: [ControladorPaciente],
    providers: [ServicioPaciente],
},
)

export class ModuloPaciente{
}