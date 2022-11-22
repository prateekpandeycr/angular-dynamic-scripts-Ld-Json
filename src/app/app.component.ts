import { Component, VERSION } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
        {
            "@context": "https://schema.org"
            /* your schema.org microdata goes here */
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }
  name = 'Angular ' + VERSION.major;
}
