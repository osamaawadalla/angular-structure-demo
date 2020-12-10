import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TransferState } from '@angular/platform-browser';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HomeProService } from './services/home/home-pro.service';
import { MetaService } from './services/meta/meta.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    ItemBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    InfiniteScrollModule,
    NgxPaginationModule,
    CarouselModule,
    AnimateOnScrollModule.forRoot(),
    MatDialogModule,
    TransferHttpCacheModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    AnimateOnScrollModule,
    CarouselModule,
    MatDialogModule,
    TransferHttpCacheModule,
    TranslateModule,
    ItemBoxComponent
  ],
  providers: [
    HomeProService,
    MetaService
  ]
})
export class SharedModule { }
