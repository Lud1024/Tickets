import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { CrearDepartamentoDto } from './dto/crear-departamento.dto';
import { ActualizarDepartamentoDto } from './dto/actualizar-departamento.dto';
export declare class DepartamentosService {
    private readonly departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento>;
    create(crearDepartamentoDto: CrearDepartamentoDto): Promise<Departamento>;
    update(id: number, actualizarDepartamentoDto: ActualizarDepartamentoDto): Promise<Departamento>;
    remove(id: number): Promise<void>;
}
