import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { sidebar } from '../../mocks/sidebar';
import { FilteredDataService } from 'src/app/shared/services/filtered-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftmenu: any;
  mobile_menu = false;
  showBox:boolean=false;
  searchText:string='';
  constructor(private router:Router, private filteredDataService:FilteredDataService) {
    let sidebar_menu = new sidebar();
    this.leftmenu = sidebar_menu.side_menu;
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.mobile_menu = !this.mobile_menu;
  }

  onSearch(text:string){

    console.log(text)
    if(text!=''){
      this.filteredDataService.changeSearchText(text);
      this.router.navigate(['/search'])
    }

  }

}
