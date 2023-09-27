import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BreadcumDataService } from 'src/app/shared/services/breadcum-data.service';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

@Component({
  selector: 'app-all-work-study-template',
  templateUrl: './all-work-study-template.component.html',
  styleUrls: ['./all-work-study-template.component.scss']
})
export class AllWorkStudyTemplateComponent implements OnInit {

  @Input() ourWorkItems:any;
  @Input() subCategoryList:any;
  @Input()selectedTab!: string;
  @Output() selectedItem= new EventEmitter<string>();
  caseStudyAllItems:any;
  subCategory:any;
  constructor(private staticDataService: StaticDataService, private breadcumDataService:BreadcumDataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.caseStudyAllItems=this.ourWorkItems;
    this.staticDataService.setAllCaseStudyData(this.ourWorkItems)

  }

  ngOnInit(): void {
    this.caseStudyAllItems=this.ourWorkItems;
    this.staticDataService.setAllCaseStudyData(this.ourWorkItems);    
  }

  onFilteredValue(filteredType:string){
    console.log(filteredType);
    
    this.ourWorkItems=this.staticDataService.getAllCaseStudyData();
    
    this.selectedItem.emit(filteredType);
    if(filteredType=="All"){

      this.ourWorkItems=this.staticDataService.getAllCaseStudyData();
      
      this.staticDataService.setFilteredData(this.ourWorkItems)
    }
    else{
      this.ourWorkItems= this.ourWorkItems.filter(
        (el: any)=>el.subcategory==filteredType
      );
      this.staticDataService.setFilteredData(this.ourWorkItems);
    }
  }

  onSortBy(sortType:string){    
    // this.ourWorkItems = this.staticDataService.getFilteredData();
    
    switch(sortType){
      // case "newly-added":this.ourWorkItems=this.staticDataService.getFilteredData(); break;
      // case "oldest_ones":this.ourWorkItems=this.staticDataService.getFilteredData(); break;
      case "newly-added": this.ourWorkItems=this.ourWorkItems.sort(
        (a:any, b:any) => (a.id > b.id ? 1 : -1)
        ); break;
      case "oldest_ones":this.ourWorkItems=this.ourWorkItems.sort(
        (a:any, b:any) => (a.id < b.id ? 1 : -1)
        ); break;
      case "sort_by_A-Z":if(this.ourWorkItems.length>1){
        this.ourWorkItems=this.ourWorkItems.sort(
          (a:any, b:any) => (a.title[0] > b.title[0] ? 1 : -1)
          );
      }else{
        this.ourWorkItems=this.ourWorkItems;
      }
          break;
      case "sort_by_Z-A":if(this.ourWorkItems.length>1){
        this.ourWorkItems=this.ourWorkItems.sort(
          (a:any, b:any) => (a.title[0] > b.title[0] ? -1 : 1)
          );
      }else{
        this.ourWorkItems=this.ourWorkItems;
      } break;
      case "default":this.ourWorkItems; break;
    }
  }

}
