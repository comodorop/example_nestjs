import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDto } from './dto/create-dto';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll() {
    return await this.mensajeRepository.find();
  }

  async create(mensaje: CreateDto) {
    const nuevo = new Mensaje();
    nuevo.mensaje = mensaje.mensaje;
    nuevo.nick = mensaje.nick;
    return await this.mensajeRepository.create(nuevo);
  }

  async updateMensaje(id: number, mensaje: CreateDto) {
    const mensajeUpdate = await this.mensajeRepository.findOne(id);
    mensajeUpdate.mensaje = mensaje.mensaje;
    mensajeUpdate.nick = mensaje.mensaje;
    return await this.mensajeRepository.save(mensajeUpdate);
  }

  async delete(id: number) {
    return await this.mensajeRepository.delete(id);
  }
}
