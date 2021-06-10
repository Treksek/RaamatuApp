import{ Component, OnInit } from '@angular/core';
import{ NavController, AlertController } from '@ionic/angular';
import{ DataService } from '../services/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private navCtrl: NavController, private dataService: DataService, private alertController: AlertController) {

  }
    
  async ngOnInit(){
   
    
    await this.dataService.loadAsync();
  }
}