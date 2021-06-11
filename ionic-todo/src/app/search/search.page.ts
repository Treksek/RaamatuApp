import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Todo } from '../models/todo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  filterTerm: string;
  bookSearch = [ Todo ]
  editing: Boolean = false;

  constructor(private navCtrl: NavController,
    private storage: Storage,
    private dataService: DataService,
    private alertCtrl: AlertController){
}

  ngOnInit() {
  }
  editTodo(todo: Todo) {
    if (!this.editing) {
      this.navCtrl.navigateForward(['/edit-todo', { id: todo.id }]);
    }
  }
}