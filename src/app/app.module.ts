import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortComponent } from './pages/sort/SortComponent';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './pages/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    ResultadoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
