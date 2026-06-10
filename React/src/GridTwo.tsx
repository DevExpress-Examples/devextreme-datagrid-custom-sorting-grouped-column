import { useCallback, useRef } from 'react';
import DataGrid, {
  Column,
  Grouping,
  GroupItem,
  GroupPanel,
  Paging,
  SortByGroupSummaryInfo,
  Summary,
} from 'devextreme-react/data-grid';
import type { DataGridRef } from 'devextreme-react/data-grid';
import { customers } from './data';
import type { Customer } from './data';

function GridTwo(): JSX.Element {
  const dataGridRef = useRef<DataGridRef>(null);

  const calculateCellValue = useCallback((rowData: Customer): string => {
    const sortOrder = dataGridRef.current?.instance().columnOption('State', 'sortOrder');
    const isReversed = sortOrder === 'desc';
    let sortValue = rowData.State;
    if (rowData.State === 'California') {
      sortValue = isReversed ? 'zzz' : 'aaa';
    }
    return sortValue;
  }, []);

  return (
    <div>
      <h2>The use of a calculated hidden column and Summary</h2>
      <DataGrid
        ref={dataGridRef}
        dataSource={customers}
        keyExpr="ID"
        showBorders={true}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Paging pageSize={10} />
        <Summary>
          <GroupItem
            column="StateOrder"
            summaryType="min"
            alignByColumn={true}
          />
        </Summary>
        <SortByGroupSummaryInfo summaryItem="StateOrder" />
        <Column dataField="ID" />
        <Column dataField="CompanyName" />
        <Column dataField="City" />
        <Column
          dataField="State"
          defaultGroupIndex={0}
          defaultSortOrder="asc"
        />
        <Column
          name="StateOrder"
          showInColumnChooser={false}
          visible={false}
          calculateCellValue={calculateCellValue}
        />
      </DataGrid>
    </div>
  );
}

export default GridTwo;
