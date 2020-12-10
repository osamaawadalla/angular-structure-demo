import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private metaService: MetaService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addMeta();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Page loaded successfully!', 'Success Message', {
        timeOut: 3000
      });
    }, 3000);
  }

  addMeta() {
    this.metaService.setTitle('About Page');
    this.metaService.addMeta('title', 'meta title');
    this.metaService.addMeta('description', 'meta description');
    this.metaService.addMeta('keywords', 'meta keywords');
  }

}
