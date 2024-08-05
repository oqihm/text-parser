import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';import { Observable } from 'rxjs';
import { Category } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:3000/parse'; // API URL

  constructor(private http: HttpClient) { }

  // Method to post a message
  postMessage(content: string): Observable<Category> {
    const headers = new HttpHeaders({
        'Content-Type': 'text/plain'
      });
      
      // content = content.replace(/\n/g, ' '); // Replace new lines with spaces
      // content = `configuration { ` + content + ' }'; // Add Configuration to the beginning of the content
      return this.http.post<any>(this.apiUrl, content, { headers });
      }
}
