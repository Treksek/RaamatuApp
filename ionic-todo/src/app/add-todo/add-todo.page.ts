import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Todo } from '../models/todo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  private todo: Todo;

  
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private dataService: DataService,
    private alertCtrl: AlertController) {
    this.todo = new Todo();
  }

  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('id');

    if (identifier != null) {
      const item = this.dataService.get(parseInt(identifier, 10));

      this.todo = JSON.parse(JSON.stringify(item));
    }
  }

  async confirmDeleteTodo() {
    const alert = await this.alertCtrl.create({
      header: 'Remove this book?',
      subHeader: '',
      message: 'You are about to remove current book. Proceed?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Delete',
        cssClass: 'danger',
        handler: () => {
          console.log('Confirm Delete');
          this.deleteTodo();
        }
      }]
    });

    await alert.present();
  }

  

  deleteTodo() {
    this.dataService.delete(this.todo);
    this.navCtrl.navigateBack('/home');
  }

  save() {
    this.dataService.save(this.todo);
    this.navCtrl.pop();
    this.navCtrl.navigateBack('/home');
         
  }
}
