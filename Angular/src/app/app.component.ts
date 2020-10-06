import { Component } from '@angular/core';
import { Customer, Service } from './app.service';

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: Customer[];
  stateSortOrder: string;

  constructor(private service: Service) {
    this.customers = service.getCustomers();
    this.stateSortOrder = 'asc';
    this.calculateGroupValue = this.calculateGroupValue.bind(this);
  }

  calculateGroupValue (rowData) {
    if (rowData.State === 'California') {
      return this.stateSortOrder === 'asc' ? 'zzz' : 'aaa';
    } else {
      return rowData.State;
    }
  }
}
