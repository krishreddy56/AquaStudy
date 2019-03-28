import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
import {MatToolbarModule, MatInputModule, MatCardModule, MatDialogModule,
  MatButtonModule, MatSortModule, MatTableModule, MatExpansionModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login/login.component';
import { ParticleComponent } from './particle/particle.component';
import { TableDisplayComponent } from './particle/table-display/table-display.component';
import { ChartDisplayComponent } from './particle/chart-display/chart-display.component';
import { DetailsComponent } from './details/details.component';
import {Routes, RouterModule} from '@angular/router';
import { MeasuresService } from './measures.service';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { navigationCancelingError } from '@angular/router/src/shared';
import { LoaderComponent } from './loader/loader.component';


const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: NavigationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'table-display', component: TableDisplayComponent},
  {path: 'chart-display', component: ChartDisplayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ParticleComponent,
    TableDisplayComponent,
    ChartDisplayComponent,
    DetailsComponent,
    HomeComponent,
    NavigationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    ChartsModule,
    MatExpansionModule,
    MatDialogModule,
    ParticlesModule,
    RouterModule.forRoot(appRoute)
  ],
  entryComponents: [
    ChartDisplayComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true},
    MeasuresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
