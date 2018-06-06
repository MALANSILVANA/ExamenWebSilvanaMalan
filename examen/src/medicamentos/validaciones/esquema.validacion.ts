import * as Joi from 'joi';
export class EsquemaValidacion{
    public esquemaMedicamentoCrear = Joi.object().keys({
        gramosAingerir: Joi.string().regex(/^[0-9]+([,][0-9]+)?$/),
        nombre: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        composicion: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        usadoPara: Joi.string().regex(/^[a-zA-Z]{3,100}$/),
        fechaCaducidad: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
        numeroPastillas: Joi.number().integer().min(1).max(20),
        pacienteId: Joi.number().integer().min(1).max(20),
    });
}