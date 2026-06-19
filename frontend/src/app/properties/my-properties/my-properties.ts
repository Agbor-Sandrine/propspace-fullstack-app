import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-my-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-properties.html',
  styleUrls: ['./my-properties.css']
})
export class MyProperties implements OnInit {

  myProperties: any[] = [];

  constructor(
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {

    this.loadProperties();

  }

  loadProperties() {

    this.propertyService
      .getProperties()
      .subscribe((data: any) => {

        this.myProperties = data;

      });

  }

  deleteProperty(id: string) {

    if(confirm('Delete this property?')) {

      this.propertyService
        .deleteProperty(id)
        .subscribe(() => {

          alert('Property deleted');

          this.loadProperties();

        });

    }

  }

}