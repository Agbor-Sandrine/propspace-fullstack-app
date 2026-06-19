import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-property-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-edit.html',
  styleUrl: './property-edit.css'
})
export class PropertyEditComponent implements OnInit {

  id = '';

  title = '';
  description = '';
  price = 0;
  city = '';
  country = '';
  propertyType = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.loadProperty();

  }

  loadProperty() {

    this.http.get<any>(
      `http://localhost:5000/api/properties/${this.id}`
    ).subscribe({
      next: (data) => {

        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.city = data.city;
        this.country = data.country;
        this.propertyType = data.propertyType;

      }
    });

  }

  updateProperty() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const updatedData = {
      title: this.title,
      description: this.description,
      price: this.price,
      city: this.city,
      country: this.country,
      propertyType: this.propertyType
    };

    this.http.put(
      `http://localhost:5000/api/properties/${this.id}`,
      updatedData,
      { headers }
    ).subscribe({
      next: () => {
        alert('Property updated');
        this.router.navigate(['/my-properties']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}