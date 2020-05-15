import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateDto } from './dto/create-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajeServices: MensajesService) {}

  @Post()
  create(@Body() createMsgDto: CreateDto, @Res() response) {
    this.mensajeServices
      .create(createMsgDto)
      .then(res => {
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch(err => {
        response.status(HttpStatus.FORBIDDEN).json({ msg: 'Error' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajeServices
      .getAll()
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(err => {
        response.status(HttpStatus.FORBIDDEN).json({ msg: 'Error' });
      });
  }

  @Put(':id')
  update(
    @Body() updateDto: CreateDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajeServices
      .updateMensaje(idMensaje, updateDto)
      .then(msg => {
        response.status(HttpStatus.OK).json({ msg: 'Register updated' });
      })
      .catch(err => {
        response.status(HttpStatus.FORBIDDEN).json({ msg: 'Error' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajeServices
      .delete(idMensaje)
      .then(msg => {
        response.status(HttpStatus.OK).json({ msg: 'Register deleted' });
      })
      .catch(err => {
        response.status(HttpStatus.FORBIDDEN).json({ msg: 'Error' });
      });
  }
}
