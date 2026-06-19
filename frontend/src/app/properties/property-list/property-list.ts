import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})
export class PropertyListComponent implements OnInit {

  properties: any[] = [];

  constructor(
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {

    this.propertyService.getProperties()
      .subscribe((data: any) => {

        this.properties = data;

      });

  }

}