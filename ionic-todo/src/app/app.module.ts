import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Ng2SearchPipeModule,
            IonicStorageModule.forRoot()
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
             // { provide: SplashScreen }
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}