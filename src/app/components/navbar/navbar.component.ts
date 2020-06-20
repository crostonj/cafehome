import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    serarchText: string;

    constructor(location: Location,  private element: ElementRef, private router: Router) {
      this.location = location;
    }

    ngOnInit(){
    }
}
