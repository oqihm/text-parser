import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileFetchService {
  constructor(private http: HttpClient) {}

  getTextFile(fileName: string): Observable<string> {
    return this.http.get(`assets/${fileName}`, { responseType: 'text' });
  }
}
