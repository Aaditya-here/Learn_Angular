import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from 'projects/component/component/home/home.component';
import { MenuComponent } from 'projects/component/component/menu/menu.component'; // adjust if different
import { FooterComponent } from 'projects/component/component/footer/footer.component' // ✅ adjust path if needed

@NgModule({
  declarations: [
    AppComponent,
  HomeComponent,
  MenuComponent,
  FooterComponent
  
  ],
  imports: [
    BrowserModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
