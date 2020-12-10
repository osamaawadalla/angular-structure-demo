import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    // CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
