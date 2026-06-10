import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Customer, Service } from './app.service';

@Component({
    selector: 'app-root',
    imports: [DxDataGridModule],
    providers: [Service],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customers: Customer[];

  stateSortOrder = 'asc';

  constructor(service: Service) {
    this.customers = service.getCustomers();
    this.calculateCellValue = this.calculateCellValue.bind(this);
  }

  calculateGroupValue(this: { sortOrder?: string }, rowData: Customer): string {
    const isReversed = this.sortOrder === 'desc';
    let sortValue = rowData.State;
    if (rowData.State === 'California') {
      sortValue = isReversed ? 'zzz' : 'aaa';
    }
    const displayValue = rowData.State;
    return `${sortValue};${displayValue}`;
  }

  calculateCellValue(rowData: Customer): string {
    const isReversed = this.stateSortOrder === 'desc';
    let sortValue = rowData.State;
    if (rowData.State === 'California') {
      sortValue = isReversed ? 'zzz' : 'aaa';
    }
    return sortValue;
  }
}
