import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListByIdTaskQuery } from '../queries/list-by-id-task.query';
import { Task } from '../../entities/task.entity';

@QueryHandler(ListByIdTaskQuery)
export class ListByIdTaskHandler implements IQueryHandler<ListByIdTaskQuery> {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) { }

    execute(query: ListByIdTaskQuery): Promise<Task | null> {
        return this.taskRepository.findOneBy({ id: query.id });
    }
}
