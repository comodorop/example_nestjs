import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateDto } from './dto/create-dto';

@Controller('mensajes')
export class MensajesController {
  @Post()
  create(@Body() createMsgDto: CreateDto) {
    return `Mensaje creado`;
  }

  @Get()
  getAll() {
    return `Se regreso todos los mensajes`;
  }

  @Put(':id')
  update(@Body() updateDto: CreateDto) {
    return `mensaje actualizado`;
  }

  @Delete(':id')
  delete() {
    return `mensaje eliminado`;
  }
}
