import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeProService } from 'src/app/shared/services/home/home-pro.service';
import { MetaService } from 'src/app/shared/services/meta/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false
  }

  constructor(
    private metaService: MetaService,
    private homePro: HomeProService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addMeta();
    this.getItems();
  }

  addMeta() {
    this.metaService.setTitle('Home Page');
    this.metaService.addMeta('title', 'meta title');
    this.metaService.addMeta('description', 'meta description');
    this.metaService.addMeta('keywords', 'meta keywords');
  }

  getItems() {
    this.spinner.show();
    this.homePro.getItems()
      .subscribe((res: any) => {
        console.log(res);
        this.spinner.hide();
        this.items = res;
        this.toastr.success('Items loaded successfully!', 'Success Message', {
          timeOut: 3000
        });
        setTimeout(() => {
          this.toastr.clear();
        }, 3000);
      }, err => {
        console.log(err);
        this.spinner.hide();
        this.toastr.error('Something went wrong!', 'Error Message', {
          timeOut: 3000
        });
      })
  }

}
