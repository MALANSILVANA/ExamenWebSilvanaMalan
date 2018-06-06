import { HttpException, HttpStatus } from '@nestjs/common';

export class SinValidacionDeParametros extends HttpException{
    constructor(readonly mensaje: any){
        super(mensaje, HttpStatus.BAD_REQUEST);
    }
}