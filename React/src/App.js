import React from 'react';
import DataGrid, { Column, GroupPanel, Grouping } from 'devextreme-react/data-grid';
import service from './data.js';
import GroupCell from './GroupCell.js';

const customers = service.getCustomers();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: 'asc'
    };
    this.onOptionChanged = this.onOptionChanged.bind(this);
    this.calculateGroupValue = this.calculateGroupValue.bind(this);

  }

  render() {
    return (
      <DataGrid
        dataSource={customers}
        keyExpr={'ID'}
        showBorders={true}
        onOptionChanged={this.onOptionChanged}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Column dataField={'ID'} />
        <Column dataField={'CompanyName'} />
        <Column dataField={'City'} />
        <Column
            dataField={'State'}
            defaultGroupIndex={0}
            sortOrder={this.state.sortOrder}
            groupCellRender={GroupCell}
            calculateGroupValue={this.calculateGroupValue}/>
      </DataGrid>
    );
  }

  onOptionChanged(e) {
    if (e.fullName.includes("sortOrder")) {
      this.setState({
        sortOrder: e.value
      });
    }
  }

  calculateGroupValue(rowData) {
    if (rowData.State === "California")
      return this.state.sortOrder === "asc" ? "zzz" : "aaa";
    else
      return rowData.State;
  }
}

export default App;
