import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SearchPageRoutingModule,
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}