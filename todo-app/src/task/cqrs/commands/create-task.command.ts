export class CreateTaskCommand {
    constructor(
        public readonly description: string,
        public readonly userId: number
    ) { }
}