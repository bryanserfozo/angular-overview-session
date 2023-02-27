import { Component } from '@angular/core';
import { Ticket } from '../ticket';
import { TICKETS } from '../mock-tickets';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']

})
export class TicketComponent {


   
  ticket = TICKETS;
selectedTicket?:Ticket;

onSelect(ticket:Ticket):void{
  this.selectedTicket = ticket;
}

}
