import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'src/app/core/mocks/menuitem';
import { BreadcumDataService } from 'src/app/shared/services/breadcum-data.service';
import { StaticDataService } from 'src/app/shared/services/static-data.service';
import {filter} from 'rxjs/operators';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  selectedTab: string = '';
  blogItems: any;
  subCategoryList: any;
  menuItems!: MenuItem[];

  constructor(private staticDataService: StaticDataService, private breadcumDataService: BreadcumDataService, private router: Router,private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.breadcumDataService.changeData('Resources - All');
    this.blogItems = this.staticDataService.getAllResourcesData()
    this.staticDataService.setAllBlogData(this.blogItems);
    this.subCategoryList = this.getSubcategoryList()
    this.staticDataService.setFilterTabForBlog('All');
  }

  onFilteredValue(filteredType: string) {
    this.staticDataService.setFilterTabForBlog(filteredType)
    this.breadcumDataService.changeData(` Resources - ${filteredType}`);
    this.blogItems = this.staticDataService.getAllBlogData();
    if (filteredType == "All") {
      this.blogItems = this.staticDataService.getAllBlogData();
      this.staticDataService.setFilteredData(this.blogItems);
    }
    else {
      this.blogItems = this.blogItems.filter(
        (el: any) => el.category == filteredType
      )
      this.staticDataService.setFilteredData(this.blogItems);
    }
  }

  onSortBy(sortType: string) {
    this.blogItems = this.staticDataService.getFilteredData();

    switch (sortType) {
      case "newly-added": this.blogItems = this.staticDataService.getFilteredData(); break;
      case "oldest_ones": this.blogItems = this.staticDataService.getFilteredData(); break;
      case "sort_by_A-Z": if (this.blogItems.length > 1) {
        this.blogItems = this.blogItems.sort(
          (a: any, b: any) => (a.title[0] > b.title[0] ? 1 : -1)
        );
      } else {
        this.blogItems = this.staticDataService.getFilteredData();
      }
        break;
      case "sort_by_Z-A": if (this.blogItems.length > 1) {
        this.blogItems = this.blogItems.sort(
          (a: any, b: any) => (a.title[0] > b.title[0] ? -1 : 1)
        );
      } else {
        this.blogItems = this.staticDataService.getFilteredData();
      } break;
      case "default": this.blogItems = this.staticDataService.getFilteredData(); break;
    }
  }

  getSubcategoryList() {
    let list = [];
    for (let i in this.blogItems) {
      list.push(this.blogItems[i].category);
    }
    list.unshift("All");
    list = [...new Set(list)];
    return list;
  }

  onReadMore(data: any) {
    // this.staticDataService.setFilterTabForBlog('All')
    this.breadcumDataService.changeData(' ' + data.title);
    // this.router.navigate(['/design/blogs'])
    console.log(data);
    
  }

}
