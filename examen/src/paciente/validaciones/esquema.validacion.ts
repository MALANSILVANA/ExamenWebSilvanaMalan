import * as Joi from 'joi';

export class EsquemaValidacion{
    esquemaPaciente = Joi.object().keys({
         nombres: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
         apellidos: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
         fecha_de_nacimiento: Joi.string(),
         hijos: Joi.number().integer().min(1).max(10),
         tieneSeguro: Joi.string().regex(/(0|1)/),
         id: Joi.number().integer().min(1).max(10),
    });
}