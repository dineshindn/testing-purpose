import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar'
//import { constants } from 'buffer';


const Material=[
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule, 
  MatExpansionModule
]


@NgModule({
  imports:[Material],
  exports:[Material]
})
export class MaterialModule { }
