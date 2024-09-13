import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { lobster } from '@lobsters/lobster';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [JsonPipe],
  selector: 'app-root',
  template: `
    <h1>{{ title()?.message | json }}</h1>
    <p>I love me some {{ lobsterRef }}</p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  private http = inject(HttpClient);
  public title = toSignal(this.http.get('/api'));
  public lobsterRef = lobster();
  ngOnInit() {}
}