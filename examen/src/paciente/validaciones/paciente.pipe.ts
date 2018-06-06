import { Injectable, PipeTransform, Req } from '@nestjs/common';
import * as Joi from 'joi';
import { SinValidacionDeParametros } from './excepciones';

@Injectable()
export class PacientePipe implements PipeTransform{
    constructor(readonly esquema: Joi.SchemaLike){
    }
    transform(valor: any){
        const{error} = Joi.validate(valor, this.esquema );
        if (error){
            throw new SinValidacionDeParametros({
                mensaje: 'Los parametros no se validaron',
                satus: '400',
                error: {error} });
        }
        return valor;
    }
}