import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    @Inject(DOCUMENT) private dom,
    private meta: Meta,
    private title: Title) { }

  createCanonicalURL() {
    let cano = this.dom.getElementById('cano');
    if (cano) {
      cano.parentNode.removeChild(cano);
    }
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
    link.setAttribute('id', 'cano');
  }

  addMeta(name, content) {
    this.meta.updateTag({ name: name, content: content });
  }

  setTitle(title) {
    this.title.setTitle(title);
  }

}
