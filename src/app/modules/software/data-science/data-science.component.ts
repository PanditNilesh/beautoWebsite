import { Component, OnInit } from '@angular/core';
import { CaseStudy } from 'src/app/core/mocks/case-study';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss','../software-home/software-home.component.scss']
})
export class DataScienceComponent implements OnInit {

  caseStudyItems:any;
  title!:string;
  connectClicked: boolean = false;
  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    let data=new CaseStudy();
    this.title="Case Studies";
    this.caseStudyItems=[];
    for(let i in data.caseStudyData){
      if(data.caseStudyData[i].category=="Software"){
        this.caseStudyItems.push(data.caseStudyData[i]);
      }
    } 
  }
  connect() {
    this.connectClicked = true;
  }

  connectCloseClicked(event: boolean) {
    this.connectClicked = event;
  }
}
