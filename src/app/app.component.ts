import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'News';
  sources: any[] = [];
  searchQuery: string = '';
  articles: any[] = [];
  selectedNewsChannel: string = 'Top 10';

  constructor(private http: HttpClient, private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getApi().subscribe((res: any) => {
      this.articles = res.articles;
    });
    this.service.initSources().subscribe((res: any) => {
      this.sources = res.sources;
    });
  }

  searchSource(source: string): void {
    if (!source.trim()) {
      return;
    }
    this.service.getArticlesByID(source).subscribe((res: any) => {
      this.selectedNewsChannel = source;
      this.articles = res.articles;
    });
  }
}
