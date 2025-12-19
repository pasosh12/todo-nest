import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";
import { Task } from "./entities/task.entity";
import { ListByIdTaskHandler } from "./cqrs/handlers/list-by-id-task.handler";
import { DeleteTaskHandler } from "./cqrs/handlers/delete-task.handler";
import { UpdateByCompletedHandler } from "./cqrs/handlers/update-by-completed.handler";
import { CreateTaskHandler } from "./cqrs/handlers/create-task.handler";
import { ListTaskHandler } from "./cqrs/handlers/list-task.handler";
import { TaskController } from "./task.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Task]), CqrsModule],
    controllers: [TaskController],
    providers: [CreateTaskHandler, ListTaskHandler, ListByIdTaskHandler, DeleteTaskHandler, UpdateByCompletedHandler],
    exports: [],
})
export class TaskModule { }