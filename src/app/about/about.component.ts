import { Component, OnInit } from '@angular/core';
import { FileFetchService } from '../services/file-fetch.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  fileContent: string | undefined;

  constructor(private fileFetchService: FileFetchService) {}

  ngOnInit(): void {
    this.fileFetchService.getTextFile('sample-configs.txt').subscribe(
      content => {
        this.fileContent = content;
      },
      error => {
        console.error('Error fetching the file', error);
      }
    );
  }
}
