import { Controller, Post, Get, Body, Res, Param, Put } from '@nestjs/common';
import { ServicioMedicamento } from './medicamentos.servicio';
import { Medicamento } from './medicamentos.interface';

@Controller('medicamento')
export class ControladorMedicamento{
    constructor(private servicioMedicamentos: ServicioMedicamento){
    }
    @Post()
    crearMedicamento(@Body() bodyParams, @Res() response){
        const gramosAingerir = bodyParams.gramosAingerir;
        const nombre = bodyParams.nombre;
        const composicion = bodyParams.composicion;
        const usadoPara = bodyParams.usadoPara;
        const fechaCaducidad = bodyParams.fechaCaducidad;
        const numeroPastillas = bodyParams.numeroPastillas;
        const pacienteId = bodyParams.pacienteId;
        const medicamento = new Medicamento(gramosAingerir, nombre, composicion, usadoPara,
            fechaCaducidad, numeroPastillas, pacienteId);
        const medicamentoc = this.servicioMedicamentos.crearMedicamento(medicamento);
        response.send(this.servicioMedicamentos.mostrarTodos());
    }
    @Get('obtenerMedicamento')
    obtenerMedicamento(){
        return this.servicioMedicamentos.mostrarTodos();
    }
    @Get('obtenerMedicamentoPorNombre/:nombre')
    obtenerMedicamentoPorNombre(@Param() paramParams, @Res() response){
        const medicamento = this.servicioMedicamentos.mostrarMedicamentosPorNombre(paramParams.nombre);
        response.send(medicamento);
    }
    @Put('actualizarPorNombre/:nombre')
    actualizarPorNombre(@Param() paramParams, @Res() response, @Body() bodyParams){
        const modificarMedicamento = this.servicioMedicamentos.modificarMedicamentoPorNombre(bodyParams.gramosAingerir, paramParams.nombre,
            bodyParams.composicion, bodyParams.usadoPara, bodyParams.fechaCaducidad, bodyParams.numeroPastillas, bodyParams.pacienteId);
        response.send(this.servicioMedicamentos.mostrarTodos());
    }

}