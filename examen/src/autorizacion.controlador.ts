import { Controller, Post, Body, Get, Req, Res, HttpException, HttpStatus } from '@nestjs/common';

@Controller('Autorizacion')
export class Autorizacion{
    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyparams, @Req() request, @Res() response){
        const usuario = bodyparams.usuario;
        const password = bodyparams.password;
        if (usuario === 'adrianeguez' && password === '12345678910'){
            response.cookie('token', 'adrianeguez').send('ok');
        }else{
            response.send('usuario incorrecto');
        }
    }
    @Post('cerrarSesion')
    cerrarSesion(@Res() response, @Req() request){
        const cookie = request.cookies.token;
        if (cookie){
            response.clearCookie('token').send({mensaje: 'usted a salido del sistema'});
        }else{
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST, error: 'no se ha iniciado sesion aun',
            }, 400);
        }
    }
}