import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from 'src/app/admin/admin.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: 'AIzaSyBu_Nd5bvRRpgxtLN6VGXwPTmW4yyMaZvs',
  authDomain: 'angular-portfolio-db58b.firebaseapp.com',
  databaseURL: 'https://angular-portfolio-db58b.firebaseio.com',
  projectId: 'angular-portfolio-db58b',
  storageBucket: 'angular-portfolio-db58b.appspot.com',
  messagingSenderId: '929463951742',
  appId: '1:929463951742:web:d4e4ad72b228f4e578d32f'
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
