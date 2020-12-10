import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Osama Demo';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }

}
