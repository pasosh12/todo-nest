import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Task } from "src/task/entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskCommand } from "../commands/create-task.command";
import { InjectRepository } from "@nestjs/typeorm";

@CommandHandler(CreateTaskCommand)

export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) { }
    execute(command: CreateTaskCommand): Promise<Task> {
        const { description, userId } = command;
        const task = this.taskRepository.create({ description, userId });
        return this.taskRepository.save(task);
    }
}