import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    UncommonPageComponent,

    CanFlyPipe,
    ToggleCasePipe,
    ColorPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
