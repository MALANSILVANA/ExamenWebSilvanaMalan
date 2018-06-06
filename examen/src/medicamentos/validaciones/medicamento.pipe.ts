import { Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { SinValidar } from './excepciones';

@Injectable()
export class MedicamentosPipe implements PipeTransform{
    constructor(readonly esquema: Joi.SchemaLike){

    }
    transform(valor: any){
        const {error} = Joi.validate(valor, this.esquema);
        if (error){
            throw new SinValidar({status: '404', mensaje: 'datos enviados incorrectos', valor, error: {error}});
        }
        return valor;
    }
}