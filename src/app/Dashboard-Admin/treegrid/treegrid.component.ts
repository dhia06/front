
import { Component, OnInit, ViewChild } from '@angular/core';
import {PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';

import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { Internationalization } from '@syncfusion/ej2-base';
let instance: Internationalization = new Internationalization();
import { EditSettingsModel,EditService,PageService ,ToolbarService, ExcelExportService,
  TreeGridExcelExportProperties, TreeGridPdfExportProperties, PdfExportService} from '@syncfusion/ej2-angular-treegrid';
  import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-treegrid',
  templateUrl: './treegrid.component.html',
  styleUrls: ['./treegrid.component.scss'],
  providers: [ToolbarService, EditService, PageService, ExcelExportService, PdfExportService]
})
export class TreegridComponent implements OnInit {

  dataSource  = [];
  public table=[]
  public tabz=[];
  public data: Array<any>;
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
  constructor(private apiService: ApiService) { }
  public toolbar: string[];
  public editSettings: Object;
  public editParams: Object;
  public tasknamerules: Object;
  public taskidrules: Object;
  public startdaterules: Object;
  public enddaterules: Object;
  public durationrules: Object;
  public progressrules: Object;
  public collapseStatePersist: boolean = true;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

  ngOnInit(): void {
       this.methode();
    this.toolbar = ['Ajouter', 'Modifier', 'Supprimer','Exporter Excel', 'Export PDF','RéduireTout'];
    this.pageSettings = { pageCount: 5 };
    this.editParams = {  params: { format: 'n' } };
    this.tasknamerules = { required: true};
    this.taskidrules = { required: true};
    this.startdaterules = { date: true};
    this.enddaterules = { date: true};
    this.durationrules = { number: true , min: 0};
    this.progressrules = { number: true , min: 0};
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Dialog' , newRowPosition: 'Below'};
    this.sortSettings = { columns: [{ field: 'name', direction: 'Ascending' }]  };
    this.pageSettings = { pageSize: 12};
   // this.toolbar = ['Add', 'Edit', 'Delete','ExcelExport', 'PdfExport', 'CsvExport','Print','CollapseAll'];
 this.toolbar = ['Ajouter', 'Modifier', 'Supprimer','ImporterExcel', 'PDFExport', 'CsvExport','Imprimer','CollapseAll'];
   // this.toolbar = ['Ajouter', 'Modifier', 'Supprimer','Exporter Excel', 'Export PDF', 'Exporter Csv','Imprimer','RéduireTout'];

 
        let objtravaild = {
          "name": '',
          "subtasks": []
      }
      let objtravail = {
          "name": '',
          "subtasks": []
      }
      let objservice = {
          "name": '',
          "subtasks": []
      }
      let tabz = [];
      let tabd = [];
      let tabtest = [];
      console.log("data",this.data)
     
  } 


  methode(){
    this.apiService.readServices().subscribe((result)=>{   
        this.dataSource  =  result;
        this.data=this.dataSource;
      
        console.log('json',JSON.stringify(this.data))
       
        console.log("ss",this.data)
        var result1 = [];
        this.data.forEach(e => {
            var result2 = [];
            e.TaskEntity.forEach(a =>{
                var result3 = [];
                a.TaskdEntity.forEach(b => {
                    var result4 = [];
                    b.ArticleEntity.forEach(c => {
                        var object4 = {
                            name : c.name
                        }
                        result4.push(object4);
                    })
                    var object3 = {
                        name : b.dtname,
                        subtasks: result4
                    };
                    result3.push(object3);
                })
                var object2 = {
                    name : a.travailname,
                    subtasks: result3
                };
                result2.push(object2)
            })
            var object1 = {
                name : e.nameservice,
                subtasks: result2
            };
        result1.push(object1);
        })
       this.data=result1
    
       });
  
  }
  
  public toolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
        case this.treegrid.grid.element.id + '_pdfexport':
        if (this.treegrid.enableRtl === true && this.treegrid.locale === 'ar') {
            let innercontent: any = 'You need custom fonts to export Arabic characters, refer this'
                 + '<a target="_blank" href="https://ej2.syncfusion.com/angular/documentation/treegrid/pdf-export/#add-custom-font-for-pdf-exporting">'
                 + 'documentation section</a>';
                DialogUtility.alert({content: innercontent});
          }
          else {
            let pdfExportProperties: TreeGridPdfExportProperties = {
                isCollapsedStatePersist: this.collapseStatePersist
            };
            this.treegrid.pdfExport(pdfExportProperties);
          }
            break;
        case this.treegrid.grid.element.id + '_excelexport':
            let excelExportProperties: TreeGridExcelExportProperties = {
                isCollapsedStatePersist: this.collapseStatePersist
            };
            this.treegrid.excelExport(excelExportProperties);
            break;
        case this.treegrid.grid.element.id + '_csvexport':
            this.treegrid.csvExport();
            break;
    }
}
}
