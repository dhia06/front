import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';

import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import {NavigationItem} from './theme/layout/admin/navigation/navigation';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import {ToggleFullScreenDirective} from './theme/shared/full-screen/toggle-full-screen';
import {NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupClientComponent } from './Authentification/SignupClient/SignupClient.component';
import { MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {LogginproComponent } from './Authentification/logginpro/logginpro.component';
import { MatSelectModule } from '@angular/material/select';
import { DataTablesModule } from 'angular-datatables';
import { SignupproComponent } from './Authentification/signuppro/signuppro.component';
import { TaskdmetiersComponent } from './Dashboard-Admin/taskdmetiers/taskdmetiers.component';
import { TaskmetiersComponent } from './Dashboard-Admin/taskmetiers/taskmetiers.component';
import { ServicetmetiersComponent } from './Dashboard-Admin/servicetmetiers/servicetmetiers.component';
// import { Ng2TableModule } from '@pluritech/ng2-responsive-table';
import {MatCardModule} from '@angular/material/card';
import { ListeProComponent } from './Dashboard-Admin/liste-pro/liste-pro.component';
import { DatametiersComponent } from './Dashboard-Admin/Datametiers/Datametiers.component';
import { DevisComponent } from './Espace-Client/Devis/Devis.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    ToggleFullScreenDirective,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    AcceuilComponent,
   SignupClientComponent,
    LogginproComponent,
    DatametiersComponent,
    DevisComponent,
    SignupproComponent,
    TaskdmetiersComponent,
    TaskmetiersComponent,
    ServicetmetiersComponent,
    ListeProComponent,
    // SwallServiceComponent
  ],
  imports: [
    // Ng2TableModule,
    DataTablesModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
   MatInputModule,
     MatRippleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbModule,  MatTableModule,
    MatCardModule,
    
    
  ],
  exports: [
    MatButtonModule,
 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    NavigationItem,
   {
     
   provide: STEPPER_GLOBAL_OPTIONS,
   useValue: { showError: true }
 
},],
 bootstrap: [AppComponent],
  schemas: [
 CUSTOM_ELEMENTS_SCHEMA,
//   NO_ERRORS_SCHEMA
 ]

})
export class AppModule { }