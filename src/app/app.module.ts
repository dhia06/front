import { BrowserModule } from '@angular/platform-browser';
import { StepperModule, WavesModule } from 'ng-uikit-pro-standard'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { SharedModule } from './theme/shared/shared.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {NgStepperModule} from 'angular-ng-stepper';
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
import {NgbButtonsModule, NgbDropdownModule, NgbModalModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupClientComponent } from './Authentification/SignupClient/SignupClient.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
//import { ArticlemgComponent } from './Dashboard-Admin/articlemg/articlemg.component';
import { NewComponent } from './new/new.component';

import { VerifyComponent } from './verify/verify.component';
import { SignProComponent } from './sign-pro/sign-pro.component';
import { InterfaceClientComponent } from './interface-client/interface-client.component';
import { NvProjetComponent } from './nv-projet/nv-projet.component';
import { TypeBienComponent } from './type-bien/type-bien.component';
import { SurfaceComponent } from './surface/surface.component';
import { PrjGammeComponent } from './prj-gamme/prj-gamme.component';
import { ExtensionComponent } from './extension/extension.component';
import { DelaiComponent } from './delai/delai.component';
import { LoggerComponent } from './logger/logger.component';
import { VerifierComponent } from './verifier/verifier.component';
import { RegisterComponent } from './Authentification/register/register.component';
import { AuthGuard } from './Authentification/logginpro/auth.guard';
import { TreegridComponent } from './Dashboard-Admin/treegrid/treegrid.component';

//import { RegisterComponent } from './register/register.component';

// import the TreeGridModule for the TreeGrid component
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { AccDevisComponent } from './acc-devis/acc-devis.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DefaultImagePipe } from './default-image.pipe';
import { SeeComponent } from './see/see.component';
import { StepperVerticalComponent } from './stepper-vertical/stepper-vertical.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { CoutComponent } from './cout/cout.component';

import { InterfaceProfessionnelComponent } from './interface-professionnel/interface-professionnel.component';
import { FilterPipe } from './filter.pipe';
import { ProjetMaComponent } from './Espace-Client/projet-ma/projet-ma.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { CalendrxComponent } from './calendrx/calendrx.component';
//import{InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { RdvComponent } from './rdv/rdv.component';
import { PriserdvComponent } from './Espace-Client/priserdv/priserdv.component';

import { ListeProjetsAdminComponent } from './liste-projets-admin/liste-projets-admin.component';
import { LancerAppDoffresComponent } from './lancer-app-doffres/lancer-app-doffres.component';
import { SharedComponent } from './shared/shared.component';
import { AppelsDoffresProComponent } from './appels-doffres-pro/appels-doffres-pro.component';
import { VisualiserAppDoffresProComponent } from './visualiser-app-doffres-pro/visualiser-app-doffres-pro.component';
import { RepondreAppDoffresComponent } from './repondre-app-doffres/repondre-app-doffres.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PusherComponent } from './pusher/pusher.component';
import { ProposComponent } from './propos/propos.component';
import { BlogComponent } from './blog/blog.component';
import { Camera, Heart, Github } from 'angular-feather/icons';
import { MyAlertDialogComponent } from './my-alert-dialog/my-alert-dialog.component';

import { InterceptorProvider } from 'src/Interceptor/interceptor';
const icons = {
  Camera,
  Heart,
  Github
};




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
 
    NewComponent,
   
    VerifyComponent,
    SignProComponent,
    InterfaceClientComponent,
    NvProjetComponent,
    TypeBienComponent,
    SurfaceComponent,
    PrjGammeComponent,
    ExtensionComponent,
    DelaiComponent,
    LoggerComponent,
    VerifierComponent,
    RegisterComponent,
    TreegridComponent,
    AccDevisComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    DefaultImagePipe,
    SeeComponent,
    StepperVerticalComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    CoutComponent,
    InterfaceProfessionnelComponent,
    FilterPipe,
    ProjetMaComponent,
    StepFiveComponent,
    CalendrxComponent,
    RdvComponent,
    PriserdvComponent,
    ListeProjetsAdminComponent,
    LancerAppDoffresComponent,
    SharedComponent,
    AppelsDoffresProComponent,
    VisualiserAppDoffresProComponent,
    RepondreAppDoffresComponent,
    NotificationsComponent,
    PusherComponent,
    ProposComponent,
    BlogComponent,
    MyAlertDialogComponent
   

    // SwallServiceComponent
  ],
  
  imports: [
    FeatherModule.pick(icons),
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule, 
    //SocketIoModule.forRoot(config),
  
    NgbModule,
    // Ng2TableModule,
    DataTablesModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    StepperModule, WavesModule,
    CdkStepperModule,
    NgStepperModule,
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
    MatTableModule,
    MatCardModule,
    TreeGridModule ,
    FlatpickrModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],


  exports: [
    MatDialogModule,
    FeatherModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, NgbModalModule,
  ],
  providers: [
   InterceptorProvider,
    ToolbarService,
    PageService,
    SortService,
    FilterService,
    AuthGuard,
    NavigationItem,
   {
     
   provide: STEPPER_GLOBAL_OPTIONS,
   useValue: { showError: true }
 
},


],
 bootstrap: [AppComponent],
  schemas: [
 CUSTOM_ELEMENTS_SCHEMA,
//   NO_ERRORS_SCHEMA
 ]

})
export class AppModule { }