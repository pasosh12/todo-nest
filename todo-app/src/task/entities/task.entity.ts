import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity, ManyToOne } from 'typeorm';
import { User } from '../../user/user.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ default: false })
    completed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;

    @Column()
    userId: number;
}
