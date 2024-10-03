import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

    @Column('text', {
        nullable: false,
    })
    nombre_usuario: string;

    @Column('text', {
        unique: true,
        nullable: false,
    })
    correo_electronico_usuario: string;

    @Column('text', {
        nullable: true,
    })
    rol_usuario: string;

    @Column('text', {
        nullable: false,
    })
    palabra_secreta: string;

    @Column('text', {
        nullable: false,
    })
    contraseña: string;

    @Column('text', {
        nullable: true,
    })
    estado: string;

    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_creacion: Date;

    @BeforeInsert()
    async encriptarDatos() {
        const salt = await bcrypt.genSalt();
        this.palabra_secreta = await bcrypt.hash(this.palabra_secreta, salt);
        this.contraseña = await bcrypt.hash(this.contraseña, salt);
    }
}
