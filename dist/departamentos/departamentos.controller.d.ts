import { DepartamentosService } from './departamentos.service';
import { Departamento } from './entities/departamento.entity';
import { CrearDepartamentoDto } from './dto/crear-departamento.dto';
import { ActualizarDepartamentoDto } from './dto/actualizar-departamento.dto';
export declare class DepartamentosController {
    private readonly departamentosService;
    constructor(departamentosService: DepartamentosService);
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento>;
    create(crearDepartamentoDto: CrearDepartamentoDto): Promise<Departamento>;
    update(id: number, actualizarDepartamentoDto: ActualizarDepartamentoDto): Promise<Departamento>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
