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
    this.calculateCellValue = this.calculateCellValue.bind(this);
  }

  calculateGroupValue(this: any, rowData: any) {
    const sortValue = rowData.State === 'California' ? this.sortOrder !== 'desc' ? 'aaa' : 'zzz' : rowData.State;
    const displayValue = rowData.State;
    return sortValue + ';' + displayValue;
  }

  calculateCellValue(rowData: any) {
    return rowData.State === 'California' ? this.stateSortOrder !== 'desc' ? 'aaa' : 'zzz' : rowData.State;
  }
}
