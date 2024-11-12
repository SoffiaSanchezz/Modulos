import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgModule,
    FormsModule
  ]
})
export class CoreModule { }
