import {Injectable} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Tableau de bord',
        type: 'item',
        url: '/dashboard/default',

        icon: 'feather icon-pie-chart',
        classes: 'nav-item',
      },

      {
        id: 'lllll',
        title: 'Disponibilité',
        type: 'item',
        url: '/dashboard/calendar',
        icon: 'feather icon-calendar',
        classes: 'nav-item',
      },
   
      // {
      //   id: 'dashboard',
      //   title: 'Gestion des articles',
      //   type: 'item',
      //   url: '/dashboard/articlemg',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item',
      // },
      // {
      //   id: 'dashboardoo',
      //   title: 'Gestion des travaux',
      //   type: 'item',
      //   url: '/dashboard/taskmg',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item',
      // },
      // {
      //   id: 'da',
      //   title: 'Gestion des services',
      //   type: 'item',
      //   url: '/dashboard/servmg',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item',
      // },
      // {
      //   id: 'day',
      //   title: 'Gestion des travaux détaillés',
      //   type: 'item',
      //   url: '/dashboard/taskdmg',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item',
      // },
  
      {
        id: 'pmmmp',
        title: 'Professionnels',
        type: 'item',
        url: '/dashboard/liste-pro',
        icon: 'feather icon-user-plus',
        classes: 'nav-item',
      },
 
      {
        id: 'heuu',
        title: 'Appels d offres',
        type: 'item',
        url: '/dashboard/app-doffres',
        icon: 'feather icon-clipboard',
      
        classes: 'nav-item',
      
      },
      {
        id: 'pp',
        title: 'Tableau de données',
        type: 'item',
        url: '/dashboard/tab-données',
        icon: 'feather icon-folder',
        classes: 'nav-item',
      },
  


     

      {
        id: 'kk',
        title: 'Data metiers',
        type: 'item',
        url: '/dashboard/Datametiers',
        icon: 'feather icon-server',
        classes: 'nav-item',
      },
      // {
      //   id: 'vf',
      //   title: 'Gestion des projets',
      //   type: 'item',
      //   url: '/dashboard/gestion-projet',
      //   icon: 'feather icon-home',
      //   classes: 'nav-item',
      // },
      {
        id: 'vb',
        title: 'Repondre aux Rendez-vous',
        type: 'item',
        url: '/dashboard/rdv',
        icon: 'feather icon-bell',
        classes: 'nav-item',
      },
      {
        id: 'vt',
        title: 'Reclamations',
        type: 'item',
        url: '/dashboard/reclamation',
        icon: 'feather icon-book',
        classes: 'nav-item',
      }
     
    ]
  },
 /* {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Component',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Form Elements',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'tables',
        title: 'Tables',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'item',
        url: '/charts/morris',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true
      },
      {
        id: 'buy_now',
        title: 'Buy Now',
        type: 'item',
        icon: 'feather icon-book',
        classes: 'nav-item',
        url: 'https://codedthemes.com/item/datta-able-angular/',
        target: true,
        external: true
      }
    ]
  }*/
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
