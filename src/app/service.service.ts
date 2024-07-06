import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  ApiKey = 'fee5298b8ec74f1b9849530b29e90531';

  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.ApiKey}`);
  }

  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.ApiKey}`);
  }

  getArticlesByID(source: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${source}&apiKey=${this.ApiKey}`);
  }
}
