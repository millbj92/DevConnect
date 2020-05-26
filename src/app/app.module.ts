import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {JwtModule} from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CardModule} from './shared/components/card/card-module'
import {FormModule} from './shared/components/forms/forms-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './login/confirm/confirm.component';
import { ResetComponent } from './login/reset/reset.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { SliderSlideComponent } from './shared/components/slider-slide/slider-slide.component';
import { HomeMessageComponent } from './users/create-profile/welcome-message/home-message.component';
import { HomeMessageSmallComponent } from './users/create-profile/welcome-message/home-message-small.componenet';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ForgotFormComponent } from './login/forgot-form/forgot-form.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component'
import {CreateProfileComponent} from './users/create-profile/create-profile.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfirmComponent,
    ResetComponent,
    SliderComponent,
    SliderSlideComponent,
    HomeMessageComponent,
    HomeMessageSmallComponent,
    LoginFormComponent,
    ForgotFormComponent,
    RegisterFormComponent,
    UserProfileComponent,
    CreateProfileComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["https://localhost:44341"],
        blacklistedRoutes: ["https://localhost:44341/api/users/authenticate"],
      },
    }),
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    FormModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [HomeMessageComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  })
export class AppModule { }
