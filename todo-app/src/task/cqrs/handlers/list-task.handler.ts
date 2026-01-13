import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { Task } from "src/task/entities/task.entity";
import { Repository } from "typeorm";
import { ListTaskQuery } from "../queries/list-task.query";
import { InjectRepository } from "@nestjs/typeorm";

@QueryHandler(ListTaskQuery)
export class ListTaskHandler implements IQueryHandler<ListTaskQuery> {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) { }
    execute(query: ListTaskQuery): Promise<Task[]> {
        return this.taskRepository.find({ where: { userId: query.userId } });
    }
}