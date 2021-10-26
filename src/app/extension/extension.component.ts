
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Avoir } from 'src/app/Models/avoir';
import Swal from 'sweetalert2';
import { ApiAvoir } from '../Dashboard-Admin/services/api.avoir';
import { ArticleService } from '../Dashboard-Admin/services/ArticleService';
import { Article } from '../Models/Article';
import { User } from '../Models/user';
import { LoginService } from '../Authentification/logginpro/login.service';
import { AccessoiresProjetService } from '../step-one/AccessoiresProjet.service';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss']
})
export class ExtensionComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;


  OnLogout(){
    this.userService.logout();
  }

  public listusers: any;
    message = '';
    title = 'datatables';
    dtOptions: DataTables.Settings = {};
    posts: any;
    startIndex = 0;
    endIndex = 10;
    data$:Observable<any>;
    searchText:any;
   
    @ViewChild(MatSort) sort: MatSort;
  
  //  data$:Observable<any>;
  articleId:any
  hidden = false
  categorie:any
  displayedColumns  :  any[] = ['id', 'nom' ,'Prix', 'actions'];
  dataSource  :any= [];
//   Article :Article=new Article();
Article:any;
    filteredPubWorkSpaces: any;
    pubWorkspaces: any;
    private prix: string;
 // private avoir: Avoir = new Avoir();
 

  constructor(private http: HttpClient,private api: AccessoiresProjetService,
    public userService: LoginService,private readonly apiavoir:ApiAvoir, private router: Router) {
      this.currentUser = this.userService.currentUserValue;
     }

  ngOnInit(): void {
    this.loading = true;
    this.api.AllAccessoires().subscribe((data)=>{  
     
      
      this.listusers=data
      console.log(JSON.stringify(data) )
    
     });
     this.data$ =  this.http.get('https://jsonplaceholder.typicode.com/posts')
    this.dtOptions = {
    processing: true}
    
    

}
ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  getArrayLenght(length){
    return new Array(length/10)
  }
  getIndex(pageIndex){
    this.startIndex = pageIndex * 10;
   this.endIndex = this.startIndex + 10;
   console.log("start",this.startIndex);
   console.log("end",this.endIndex);

  }
  prevIndex(endIndex){
    this.endIndex=this.startIndex--;
    this.startIndex=this.endIndex-10
    console.log("start next",this.startIndex)
    console.log("end next",this.endIndex)
  }
//99-100
  nextIndex(startIndex){
    this.startIndex=this.endIndex++
    this.endIndex=this.startIndex + 10;
    console.log("start next",this.startIndex)
    console.log("end next",this.endIndex)
  }


  selectService(Article){
    this.hidden=true;
   console.log(this.hidden)
    this.Article = Article;
    console.log(JSON.stringify(this.dataSource) )
  }

 
  

  updateContact(acc:AccessoiresVue){
    this.api.Addaccprix(acc).subscribe((result)=>{
      console.log(result);
    });
    Swal.fire('Parfait', 'Vous venez d ajouter le prix de l article !', 'success')
  }



searchTextChanged(searchText){
    
         this.filteredPubWorkSpaces= this.pubWorkspaces.filter(pubws=>pubws.name.includes(searchText));
       }

       fonction(acc:AccessoiresVue){
        const avoir = new Avoir();
   
        Swal.fire({
        
          animation: false,
          title: 'Prix des articles',
          imageAlt: 'original',
          width: 300,
          customClass: {
            popup: 'animated tada',
            validationMessage: 'my-validation-message'
          },
        
          imageHeight: 300,
          padding: '3em',
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Valider!',
          backdrop: `
          rgba(0,0,123,0.4)
          url("./assets/images/client/verification.gif")
          left top
          no-repeat
            
          
            <!-- Include the Material Ui theme --> `,
          html: `
            <form>
            <label for='prix'>Entrer Votre prix SVP!</label>
           
            <input required type="number" placeholder="prix"  id="prix" class="swal2-input">
            </form>
            `,
          focusConfirm: false,
          preConfirm: () => {

          avoir.prix = (<HTMLInputElement>document.getElementById('prix')).value;
    avoir.accessoiresId= acc.id;
    console.log('acccccccccc', acc.id);


       const token = localStorage.getItem('token');
 if (token){
  console.log("hhhhhhhhhhhhhhhh",token)

            this.apiavoir.createServices(avoir).subscribe(data => {
        
              Swal.fire({
        
                customClass: { popup: 'animated tada' },
                animation: false,
        
                icon: 'success',
                title: 'Ton Prix a eté ajouté',
                showConfirmButton: false,
                timer: 1500
              })
        
            });
}
        
          }
        })}
        

}
