import { NgModule } from '@angular/core';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { fakeBackendProvider } from './_helpers';
import { ReactiveFormsModule } from '@angular/forms';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
    imports : [BrowserModule,
               appRoutingModule,
               ReactiveFormsModule,
               HttpClientModule,
              ],
    declarations : [AppComponent,
                    HomeComponent,
                    LoginComponent,
                    RegisterComponent
                ],
    providers: [    
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                    fakeBackendProvider
                ],
    bootstrap : [AppComponent]
})

export class AppModule{
    
}