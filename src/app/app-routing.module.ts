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

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'home',
    component: AcceuilComponent
  },
  {
    path: 'login-pro',
    component: LogginproComponent
  },
  {
    path: 'signuppro',
    component: SignupproComponent
  },
 
  {
    path: 'Signup-Client',
    component: SignupClientComponent,
  
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
        pathMatch: 'full'
      },
      // {
      //   path: 'dashboard/articlemg',
      //   component: ArticlemgComponent
      // },
       {
        path: 'dashboard/taskmg',
        component: TaskmetiersComponent
      },
      {
        path: 'dashboard/servmg',
        component: ServicetmetiersComponent
      },
      {
        path: 'dashboard/taskdmg',
        component: TaskdmetiersComponent
      },

      {
        path: 'dashboard/Datametiers',
        component: DatametiersComponent
      },

     
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(m => m.DashboardModule)
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
