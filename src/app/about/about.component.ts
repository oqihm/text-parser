import { Component, OnInit } from '@angular/core';
import { FileFetchService } from '../services/file-fetch.service';
import { forkJoin } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  files: { title: string; content: string }[] = [];

  constructor(private fileFetchService: FileFetchService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    forkJoin({
      fields: this.fileFetchService.getTextFile('fields-config.txt'),
      calculations: this.fileFetchService.getTextFile('calculations-config.txt')
    }).subscribe(
      ({ fields, calculations }) => {
        this.files.push({ title: 'Fields', content: fields });
        this.files.push({ title: 'Calculations', content: calculations });
      },
      error => {
        console.error('Error fetching the files', error);
      }
    );
  }

  copyToClipboard(content: string) {
    this.clipboard.copy(content);
    // alert('Content copied to clipboard!');
  }
}
