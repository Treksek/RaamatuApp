

export class Todo {
    id: number;
    title: string;
    writer: string;
    year: string;
    location: string;
    description: string;
    isDone: boolean;
    hasDeadline: boolean;
    deadline: Date;
    
    constructor(){
        this.id = 0;
        this.title = '';
        this.writer = '';
        this.year = '';
        this.location = '';
        this.description = '';
        this.isDone = false;
        this.hasDeadline = false;
        this.deadline = new Date();          // TODO: Assign meaningful value
    }
}