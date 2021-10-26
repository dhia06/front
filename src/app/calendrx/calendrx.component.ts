
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr/flatpickr-defaults.service';

import { switchAll } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { async } from '@angular/core/testing';
import { CalenderService } from './calender.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendrx',
  templateUrl: './calendrx.component.html',
  styleUrls: ['./calendrx.component.scss']
})
export class CalendrxComponent implements OnInit {

  events: CalendarEvent[] = [
    
  ];
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  public datePickerOptions : FlatpickrDefaultsInterface = {
    allowInput : true,
    enableTime : true,
    mode : 'single',
    dateFormat : "Y-m-d H:i",
    // this:
    enable : [{from : new Date(0, 1), to : new Date(new Date().getFullYear() + 200, 12)}]
  }
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  ngOnInit(){
    this.service.readServices().subscribe(
      (data) => {
        data.forEach((e) => {
          let obj:CalendarEvent = {
            id: e.id,
            start: subDays(new Date(e.debut),1) ,
            end: subDays(new Date(e.fin),0),
            title: e.titre,
            // actions: this.actions,



            color: colors.yellow
          }
          console.log(obj)
          this.events.push(obj);
          this.refresh.next();
        })
      } 
    )
  }

  

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private service : CalenderService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({event,newStart,newEnd}: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
       
      },
      
    ];
  
  }

  deleteEvent(eventToDelete: CalendarEvent) {
   Swal.fire({
      title: 'Voulez-vous supprimer cette disponibilité?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

       
        
        this.service.deleteService(eventToDelete.id).subscribe();
        this.events = this.events.filter((event) => event !== eventToDelete);
      
      //  this.ngOnInit()
        Swal.fire('Enregistrée!', '', 'success')
       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    
    })
   
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  submit(event){
    let body = {
      titre: event.title,
      debut: event.start,
      fin: event.end,
      color: event.color.primary

    }
    this.service.createServices(body).subscribe();
    Swal.fire('Parfait! Votre disponibilité a été ajouté avec succès!','', 'success')
    console.log(event)

  }
}