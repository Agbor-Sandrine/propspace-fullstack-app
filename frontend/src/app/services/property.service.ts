import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  API_URL = 'http://localhost:5000/api/properties';

  constructor(private http: HttpClient) {}

  getProperties() {
    return this.http.get(this.API_URL);
  }

  getMyProperties() {

    const token = localStorage.getItem('token');

    return this.http.get(
      `${this.API_URL}/my-properties`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  createProperty(data: any) {

    const token = localStorage.getItem('token');

    return this.http.post(
      this.API_URL,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  deleteProperty(id: string) {

    const token = localStorage.getItem('token');

    return this.http.delete(
      `${this.API_URL}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

}