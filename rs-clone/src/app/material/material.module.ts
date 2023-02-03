import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

const MaterialComponents = [
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatSelectModule,
  MatTabsModule,
  MatTreeModule,
  MatExpansionModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
