import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiCoingeckoService } from './api-coingecko.service';
import { CardCoinComponent } from './card-coin/card-coin.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    CardCoinComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  
  bootstrap: [AppComponent],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]

})
export class AppModule { }
