import { Injectable, OnInit, Pipe } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Todo } from '../models/todo';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: "sort"
})

export class DataService {

  public todos: Array<Todo> = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    this.storage.create();
  }

  load() {

    // this.todos.push(
    //   { id: 1, title: 'Ärka üles', description : 'Enne kõike tee silmad lahti'},
    //   { id: 2, title: 'Pese silmad', description : 'Siis taastame nägemise'},
    //   { id: 3, title: 'Pane riidesse', description : 'Seejärel paneme end heasse vormi'},
    //   { id: 4, title: 'Söö kõht täis', description : 'Ja valmistame end pikaks päevaks ette'},
    //   { id: 5, title: 'Mine kooli', description : 'Edasi matkame pisut'}
    // );

    this.storage.get('todos').then((data) => {
      if (data != null) {
        this.todos = data;
      } else {
        this.todos = [];
      }
    });
  }

  async loadAsync() {

    // this.load();
    const data = await this.storage.get('todos');

    if (data != null) {
      this.todos = data;
    } else {
      this.todos = [];
    }
  }

  getIndex(id: number): number {
    if (this.todos != null) {
      return this.todos.findIndex(x => x.id === id);
    }

    return -1;
  }

  get(id: number): Todo {
    return this.todos.filter(x => x.id === id)[0];
  }

  getMaxId(): number {
    if (this.todos != null) {
      return Math.max.apply(Math, this.todos.map(o => o.id));
    }

    return -1;
  }

  async delete(todo: Todo) {
    if (this.todos != null) {
      const index = this.getIndex(todo.id);

      if (index >= 0) {
        this.todos.splice(index, 1);
        await this.saveTodos();

        const toast = await this.toastCtrl.create({
          message: 'Book deleted!',
          duration: 2000,
          position: 'top',
          color: 'danger'

        });
        toast.present();
      }
    }
  }

  async save(todo: Todo) {
    if (this.todos != null) {
      if (todo.id === 0 || todo.id == null) {
        let newId = this.getMaxId();

        // Kui getMaxId()annab tagasi -1, siis uus ID tuleb 1, muidu max + 1
        newId = newId <= 0 ? 1 : newId + 1;
        // if (newId <= 0) {
        //   newId = 1;
        // } else {
        //   newId++;
        // }

        todo.id = newId;
        console.log('Assign new ID ' + newId);
      }

      const index = this.getIndex(todo.id);

      if (index === -1) {
        console.log('Adding book');
        this.todos.push(todo);
      } else {
        console.log('Updating book at index ' + index);
        this.todos[index] = todo;
      }

      await this.saveTodos();
      const toast = await this.toastCtrl.create({
        message: 'Book saved!',
        duration: 2000,
        position: 'top',
        color: 'success'

      });
      toast.present();
    }
  }

  async saveTodos() {
    await this.storage.set('todos', this.todos);
  }

  reorderTodos(from: number, to: number) {
    const todoToMove = this.todos.splice(from, 1)[0];
    this.todos.splice(to, 0, todoToMove);
    this.saveTodos();
  }

  // get isIntroWatched(): boolean {
  //     return (async() => await this.getIsIntroWatched());
  // }

  set isIntroWatched(isWatched: boolean) {
    this.storage.set('IsIntroWatched', isWatched);
  }

  async getIsIntroWatchedAsync(): Promise<boolean> {
      const isWatched = await this.storage.get('IsIntroWatched');

      if (isWatched != null) {
          return isWatched;
      } else {
          return false;
      }
  }
  alphabetSort(){
    const isSorted = this.todos.sort((a,b) => (a.title > b.title) ? 1 : -1);
    return isSorted;

  }
  

}