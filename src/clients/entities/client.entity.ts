import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
        nullable: false,
    })
    correo_electronico: string;

    @Column('text', {
        nullable: false,
    })
    nombre: string;

    @Column('text', {
        nullable: true,
    })
    telefono: string;

    @Column('text', {
        nullable: true,
    })
    direccion: string;

    @Column('text', {
        nullable: true,
    })
    estado_cliente: string;
}
