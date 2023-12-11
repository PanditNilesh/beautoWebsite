import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import { OurTeamComponent } from './our-team.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountUpDirective } from 'src/app/shared/directives/count-up.directive';


@NgModule({
  declarations: [
    OurTeamComponent,
    CountUpDirective
  ],
  imports: [
    CommonModule,
    OurTeamRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class OurTeamModule { }
