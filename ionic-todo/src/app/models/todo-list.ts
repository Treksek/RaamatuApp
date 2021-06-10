import{ Todo } from'./todo';

export class TodoList {
    id: number;
    title: string;
    color: string;
    category: string;
    // backgroundImage: string;
    items: Array<Todo>;
    
    constructor() {
        this.id = 0;
        this.title = '';
        this.color = '';
        this.category = '';
        // this.backgroundImage = '';
        this.items = [];
    }

}