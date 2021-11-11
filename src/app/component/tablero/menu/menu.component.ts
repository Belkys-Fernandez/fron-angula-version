import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu[]=[];

  constructor(private _menuService:MenuService) { }

  ngOnInit(): void {
    this.cargarmenu();
  }
  cargarmenu(){
    this._menuService.getMenu(). subscribe(data => {
   
      this.menu= data;
      

    })
  }
}
