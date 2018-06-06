import { Module } from '@nestjs/common';
import { ModuloPaciente } from 'paciente/paciente.modulo';
import { MedicamentoModulo } from 'medicamentos/medicamentos.modulo';
import { Autorizacion } from 'autorizacion.controlador';

@Module({
  imports: [ModuloPaciente, MedicamentoModulo],
  controllers: [Autorizacion],
})
export class AppModule {
}
