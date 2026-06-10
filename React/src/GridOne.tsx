import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
} from 'devextreme-react/data-grid';
import GroupCell from './GroupCell.tsx';
import { customers } from './data';
import type { Customer } from './data';

function calculateGroupValue(this: { sortOrder?: string }, rowData: Customer): string {
  const isReversed = this.sortOrder === 'desc';
  let sortValue = rowData.State;
  if (rowData.State === 'California') {
    sortValue = isReversed ? 'zzz' : 'aaa';
  }
  const displayValue = rowData.State;
  return `${sortValue};${displayValue}`;
}

function GridOne(): JSX.Element {
  return (
    <div>
      <h2>The use of calculateGroupValue and groupCellTemplate</h2>
      <DataGrid dataSource={customers} keyExpr="ID" showBorders={true}>
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Column dataField="ID" />
        <Column dataField="CompanyName" />
        <Column dataField="City" />
        <Column
          dataField="State"
          defaultGroupIndex={0}
          groupCellRender={GroupCell}
          calculateGroupValue={calculateGroupValue}
        />
      </DataGrid>
    </div>
  );
}

export default GridOne;
