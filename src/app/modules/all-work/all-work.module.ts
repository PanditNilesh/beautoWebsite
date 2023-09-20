import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllWorkRoutingModule } from './all-work-routing.module';
import { AllWorkComponent } from './all-work/all-work.component';
import { AllWorkStudyTemplateComponent } from './all-work-study-template/all-work-study-template.component';



@NgModule({
  declarations: [
    AllWorkComponent,
    AllWorkStudyTemplateComponent
  ],
  imports: [
    CommonModule,
    AllWorkRoutingModule,
    SharedModule
  ]
})
export class AllWorkModule { }
