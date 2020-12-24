import React from "react";
import DataGrid, {
  Column,
  Grouping,
  GroupItem,
  GroupPanel,
  Paging,
  SortByGroupSummaryInfo,
  Summary,
} from "devextreme-react/data-grid";
import service from "./data";

const customers = service.getCustomers();

export default function GridTwo() {
  const dataGridRef = React.createRef();

  const calculateCellValue = (rowData) => {
    return rowData.State === "California"
      ? dataGridRef.current.instance.columnOption("State", "sortOrder") !==
        "desc"
        ? "aaa"
        : "zzz"
      : rowData.State;
  };

  return (
    <div>
      <h2>The use of a calculated hidden column and Summary</h2>
      <DataGrid
        ref={dataGridRef}
        dataSource={customers}
        keyExpr={"ID"}
        showBorders={true}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Paging pageSize={10} />
        <Summary>
          <GroupItem
            column={"StateOrder"}
            summaryType={"min"}
            alignByColumn={true}
          />
        </Summary>
        <SortByGroupSummaryInfo summaryItem={"StateOrder"} />
        <Column dataField={"ID"} />
        <Column dataField={"CompanyName"} />
        <Column dataField={"City"} />
        <Column
          dataField={"State"}
          defaultGroupIndex={0}
          defaultSortOrder="asc"
        />
        <Column
          name={"StateOrder"}
          showInColumnChooser={false}
          visible={false}
          calculateCellValue={calculateCellValue}
        />
      </DataGrid>
    </div>
  );
}
