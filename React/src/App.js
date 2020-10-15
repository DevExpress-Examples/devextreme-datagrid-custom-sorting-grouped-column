import React from 'react';
import DataGrid, { Column, GroupPanel, Grouping, Paging, Summary, GroupItem, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';
import service from './data.js';
import GroupCell from './GroupCell.js';

const customers = service.getCustomers();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortOrder: 'asc'
    };
    this.onOptionChanged = this.onOptionChanged.bind(this);
    this.calculateCellValue = this.calculateCellValue.bind(this);
  }
  render() {
    return (
      <div>
      <h2>The use of calculateGroupValue and groupCellTemplate</h2>
      <DataGrid
        dataSource={customers}
        keyExpr={'ID'}
        showBorders={true}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Column dataField={'ID'} />
        <Column dataField={'CompanyName'} />
        <Column dataField={'City'} />
        <Column
            dataField={'State'}
            defaultGroupIndex={0}
            groupCellRender={GroupCell}
            calculateGroupValue={this.calculateGroupValue}/>
      </DataGrid>

      <h2>The use of a calculated hidden column and Summary</h2>
      <DataGrid
          dataSource={customers}
          keyExpr={'ID'}
          showBorders={true}
          onOptionChanged={this.onOptionChanged}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Paging pageSize={10} />
        <Summary>
          <GroupItem
            column={'StateOrder'}
            summaryType={'min'}
            alignByColumn={true} />
        </Summary>
        <SortByGroupSummaryInfo summaryItem={'StateOrder'} />
        <Column dataField={'ID'} />
        <Column dataField={'CompanyName'} />
        <Column dataField={'City'} />
        <Column
            dataField={'State'}
            defaultGroupIndex={0}
            sortOrder={this.state.sortOrder}/>
        <Column
            name={'StateOrder'}
            showInColumnChooser={false}
            visible={false}
            calculateCellValue={this.calculateCellValue} />
      </DataGrid>
        </div>
    );
  }

  calculateGroupValue(rowData) {
    let sortValue = rowData.State === "California" ? this.sortOrder !== "desc" ? "aaa" : "zzz" : rowData.State;
    let displayValue = rowData.State;
    return sortValue + ";" + displayValue;
  }

  onOptionChanged(e) {
    if (e.fullName.includes("sortOrder")) {
      this.setState({
        sortOrder: e.value
      });
    }
  }

  calculateCellValue(rowData) {
    return rowData.State === "California" ? this.state.sortOrder !== "desc" ? "aaa" : "zzz" : rowData.State;
  }
}

export default App;
