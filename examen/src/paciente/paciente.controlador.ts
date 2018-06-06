import { Controller, Post, Query, Body, Get, Param, Put, UsePipes } from '@nestjs/common';
import { ServicioPaciente } from './paciente.servicio';
import { Paciente } from './paciente.interface';
import { PacientePipe } from './validaciones/paciente.pipe';
import { EsquemaValidacion } from './validaciones/esquema.validacion';

@Controller('paciente')
export class ControladorPaciente{
    constructor(private servicioPaciente: ServicioPaciente){
    }
    @Post()
    @UsePipes(new PacientePipe(new EsquemaValidacion().esquemaPaciente))
    crearUsuario(@Body() bodyParametros){
        const nombres = bodyParametros.nombres;
        const apellidos = bodyParametros.apellidos;
        const fecha_de_nacimiento = bodyParametros.fecha_de_nacimiento;
        const hijos = bodyParametros.hijos;
        const tieneSeguroString = bodyParametros.tieneSeguro;
        let valorBooleano;
        if (tieneSeguroString === '1'){
            valorBooleano = true;
        }
        if (tieneSeguroString === '0'){
            valorBooleano = false;
        }
        const id = bodyParametros.id;

        const nuevoPaciente = new Paciente(nombres, apellidos, fecha_de_nacimiento, hijos, valorBooleano, id);
        this.servicioPaciente.crearPaciente(nuevoPaciente);
        return this.servicioPaciente.mostrarPacientes();

    }

    @Get('/:id')
    mostrarPacientes(@Param() parametros){
        const id = parametros.id;
        return this.servicioPaciente.mostrarPacienteporId(id);
    }

    @Get()
    mostrarTodosLosPacientes(){
        return this.servicioPaciente.mostrarPacientes();
    }

    @Put('/:id')
    @UsePipes(new PacientePipe(new EsquemaValidacion().esquemaPaciente))
    modificarPacientePorId(@Param() param, @Body() bodyParametros ){
        const nombres = bodyParametros.nombres;
        const apellidos = bodyParametros.apellidos;
        const fecha_de_nacimiento = bodyParametros.fecha_de_nacimiento;
        const hijos = bodyParametros.hijos;
        const tieneSeguroString = bodyParametros.tieneSeguro;
        let valorBooleano;
        if (tieneSeguroString === '1'){
            valorBooleano = true;
        }
        if (tieneSeguroString === '0'){
            valorBooleano = false;
        }
        const id = param.id;

        this.servicioPaciente.modificarPacientePorId(nombres, apellidos, fecha_de_nacimiento, hijos, valorBooleano, id);
        return this.servicioPaciente.mostrarPacientes();
    }
}