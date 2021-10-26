import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ServicetmetiersComponent } from './Dashboard-Admin/servicetmetiers/servicetmetiers.component';
import { SignupproComponent } from './Authentification/signuppro/signuppro.component';
import { TaskdmetiersComponent } from './Dashboard-Admin/taskdmetiers/taskdmetiers.component';
import { TaskmetiersComponent } from './Dashboard-Admin/taskmetiers/taskmetiers.component';

import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { LogginproComponent } from './Authentification/logginpro/logginpro.component';
import { SignupClientComponent } from './Authentification/SignupClient/SignupClient.component';
import { DatametiersComponent } from './Dashboard-Admin/Datametiers/Datametiers.component';
import { DevisComponent } from './Espace-Client/Devis/Devis.component';
import { ListeProComponent } from './Dashboard-Admin/liste-pro/liste-pro.component';
//import { ArticlemgComponent } from './Dashboard-Admin/articlemg/articlemg.component';
import { NewComponent } from './new/new.component';
// import { DetailsProComponent } from './details-pro/details-pro.component';
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
import { ListComponent } from './list/list.component';
import { AccDevisComponent } from './acc-devis/acc-devis.component';
import { SeeComponent } from './see/see.component';
import { StepperVerticalComponent } from './stepper-vertical/stepper-vertical.component';
// import { ArticlemgComponent } from './Dashboard-Admin/articlemg/articlemg.component';
import { InterfaceProfessionnelComponent } from './interface-professionnel/interface-professionnel.component';
import { ProjetMaComponent } from './Espace-Client/projet-ma/projet-ma.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { Role } from './Models/role';
import { CalendrxComponent } from './calendrx/calendrx.component';
import { RdvComponent } from './rdv/rdv.component';
import { PriserdvComponent } from './Espace-Client/priserdv/priserdv.component';
import { ListeProjetsAdminComponent } from './liste-projets-admin/liste-projets-admin.component';
import { LancerAppDoffresComponent } from './lancer-app-doffres/lancer-app-doffres.component';
import { SharedModule } from './theme/shared/shared.module';
import { SharedComponent } from './shared/shared.component';
import { AppelsDoffresProComponent } from './appels-doffres-pro/appels-doffres-pro.component';
import { VisualiserAppDoffresProComponent } from './visualiser-app-doffres-pro/visualiser-app-doffres-pro.component';
import { RepondreAppDoffresComponent } from './repondre-app-doffres/repondre-app-doffres.component';
import { PusherComponent } from './pusher/pusher.component';
import { ProposComponent } from './propos/propos.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [

  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'propos',
    component: ProposComponent,
  },
  {
    path: 'bloog',
    component: BlogComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'chat',
    component: PusherComponent
  },
  {
    path: 'see',
    component: SeeComponent
  },
  // {
  //   path: 'mg',
  //   component: ArticlemgComponent
  // },
  {
    path: 'stepper/:id',
    component: StepperVerticalComponent
  },
    {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: 'accdevis',
    component: AccDevisComponent
  },

  {
    path: 'verifier',
    component: VerifierComponent
  },
  {
    path: 'app-doffres',
    component: AppelsDoffresProComponent
  },
  {
    path: 'visualiser-app-doffres/:id',
    component: VisualiserAppDoffresProComponent
  },
  {
    path: 'repondre/:id',
    component: RepondreAppDoffresComponent
  },
  {
    path: 'Interfaceclient',
    component: InterfaceClientComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'pro',
    component: SignProComponent
  },
  {
    path: 'admin',
    component: InterfaceClientComponent,

},
{
  path: 'logger',
  component: LoggerComponent,
  


},
  {
    path: 'home',
    component: AcceuilComponent
  },

  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'delai',
    component: DelaiComponent
  },
  {
    path: 'depot-prix',
    component: ExtensionComponent
  },
 

  {
    path: 'da/:id',
    component: DelaiComponent
  },
  

  {
    path: 'prof',
    component: InterfaceProfessionnelComponent

  },
  {
    path: 'projj',
    component: ProjetMaComponent
  },

  {
    path: 'five',
    component: StepFiveComponent
  },
  {
    path: 'prj-gamme',
    component: PrjGammeComponent
  },

  
  {
    path: 'surface',
    component: SurfaceComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'type-bien',
    component: TypeBienComponent
  },
  {
    path: 'nv-projet',
    component: NvProjetComponent
  },
  {
    path: 'connexion',
    component: LogginproComponent
  },
  {
    path: 'signuppro',
    data: {
      role: [
        Role.professionnel,
      ]
    },
    component: SignupproComponent
  },
  {
    path: 'shared',
    component:  SharedComponent
  },
 

  {
    path: 'prdv',
    component: PriserdvComponent,
  
  },

  {
    path: 'Devis',
    component: DevisComponent,
  
  },
  

  {
    path: '',
    component: AdminComponent,
    
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full',
    
      },
      // {
      //   path: 'dashboard/articlemg',
      //   component: ArticlemgComponent
      // },
      {
        path: 'dashboard/rdv',
        component: RdvComponent,
      
      },
       {
        path: 'dashboard/taskmg',
        component: TaskmetiersComponent
      },
      // {
      //   path: 'dashboard/articlemg',
      //   component: ArticlemgComponent
      // },
      {
        path: 'dashboard/servmg',
        component: ServicetmetiersComponent
      },
      {
        path: 'dashboard/calendar',
        component: CalendrxComponent
      },
      {
        path: 'dashboard/taskdmg',
        component: TaskdmetiersComponent
      },

      {
        path: 'dashboard/app-doffres',
        component: ListeProjetsAdminComponent
      },
      { path: 'dashboard/app-doffres/details/:id',
      component: LancerAppDoffresComponent },
    
      {
        path: 'dashboard/liste-pro',
        component: ListeProComponent},



        // { path: 'dashboard/details/:id',
        //  component: DetailsProComponent },

      {
        path: 'dashboard/Datametiers',
        component: DatametiersComponent
      },
      {
        path: 'dashboard/tab-données',
        component:  TreegridComponent
      },


      // {
      //   path: 'dashboard/shared',
      //   component:  SharedComponent
      // },

     
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(m => m.DashboardModule)
        // canActivate: [AuthGuard]
      },
  
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(m => m.UiBasicModule)
      },
     
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(m => m.CoreChartModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/extra/sample-page/sample-page.module').then(m => m.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
