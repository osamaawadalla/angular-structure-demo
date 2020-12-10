// import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';

// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [
//     AppModule,
//     ServerModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppServerModule {}

import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './shared/loaders/translate-server.loader';
import { TransferState } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
