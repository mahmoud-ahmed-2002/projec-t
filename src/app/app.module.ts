import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componet/home/home.component';
import { AboutComponent } from './componet/about/about.component';
import { FooterComponent } from './componet/footer/footer.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { CarouselComponent } from './componet/home/componet/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
