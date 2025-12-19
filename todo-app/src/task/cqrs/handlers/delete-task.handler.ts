import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteTaskCommand } from "../commands/delete-task.command";
import { Repository } from "typeorm";
// import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../../entities/task.entity";
import { InjectRepository } from "@nestjs/typeorm";

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) { }
    async execute(command: DeleteTaskCommand): Promise<void> {
        const { id } = command;
        await this.taskRepository.delete(id);
    }
}