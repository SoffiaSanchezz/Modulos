import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CapitalizarPipe } from './shared/capitalizar.pipe';
import { ResaltarDirective } from './shared/resaltar.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ListaComponent } from './producto/lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CapitalizarPipe,
    ResaltarDirective,
    PageNotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    //SharedModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
