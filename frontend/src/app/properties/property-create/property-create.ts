import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property-create.html',
  styleUrls: ['./property-create.css']
})
export class PropertyCreateComponent {

  property = {
    title: '',
    description: '',
    city: '',
    country: '',
    price: 0,
    propertyType: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  createProperty() {

    this.propertyService
      .createProperty(this.property)
      .subscribe({

        next: () => {

          this.successMessage = 'Property added successfully';
          this.errorMessage = '';

          setTimeout(() => {
            this.router.navigate(['/my-properties']);
          }, 1000);

        },

        error: (err) => {

          console.log(err);

          this.errorMessage =
            err.error?.message || 'Failed to create property';
        }
      });
  }
}