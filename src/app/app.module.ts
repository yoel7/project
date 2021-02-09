import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiCoingeckoService } from './api-coingecko.service';
import { CardCoinComponent } from './card-coin/card-coin.component';
import { Tr111Component } from './tr111/tr111.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCoinComponent,
    Tr111Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
