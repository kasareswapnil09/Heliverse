// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockDataUrl =
    '../assets/heliverse_mock_data.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.mockDataUrl);
  }
}
