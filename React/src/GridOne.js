import React from "react";
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
} from "devextreme-react/data-grid";
import GroupCell from "./GroupCell";
import service from "./data";
const customers = service.getCustomers();

export default function GridOne() {
  function calculateGroupValue(rowData) {
    let sortValue =
      rowData.State === "California"
        ? this.sortOrder !== "desc"
          ? "aaa"
          : "zzz"
        : rowData.State;
    let displayValue = rowData.State;
    return sortValue + ";" + displayValue;
  }

  return (
    <div>
      <h2>The use of calculateGroupValue and groupCellTemplate</h2>
      <DataGrid dataSource={customers} keyExpr={"ID"} showBorders={true}>
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <Column dataField={"ID"} />
        <Column dataField={"CompanyName"} />
        <Column dataField={"City"} />
        <Column
          dataField={"State"}
          defaultGroupIndex={0}
          groupCellRender={GroupCell}
          calculateGroupValue={calculateGroupValue}
        />
      </DataGrid>
    </div>
  );
}
