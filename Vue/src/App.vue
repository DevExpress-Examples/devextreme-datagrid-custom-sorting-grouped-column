<template>
  <div>
  <h2>The use of calculateGroupValue and groupCellTemplate</h2>
  <DxDataGrid
    :show-borders="true"
    :data-source="dataSource"
    key-expr="ID"
  >
    <DxGroupPanel :visible="true"/>
    <DxGrouping :auto-expand-all="true"/>
    <DxColumn data-field="ID"/>
    <DxColumn data-field="CompanyName"/>
    <DxColumn data-field="City"/>
    <DxColumn
      data-field="State"
      :group-index="0"
      :calculate-group-value="calculateGroupValue"
      group-cell-template="groupCellTemplate"
    />
    <template #groupCellTemplate="{ data }">
      <div>{{data.column.caption + ": " + data.value.split(";")[1]}}</div>
    </template>
  </DxDataGrid>

  <h2>The use of a calculated hidden column and Summary</h2>
  <DxDataGrid
      :show-borders="true"
      :data-source="dataSource"
      key-expr="ID"
  >
    <DxGroupPanel :visible="true"/>
    <DxGrouping :auto-expand-all="true"/>
    <DxPaging :page-size="10" />
    <DxSummary>
      <DxGroupItem
        column="StateOrder"
        summaryType="min"
        :alignByColumn="true"
      />
    </DxSummary>
    <DxSortByGroupSummaryInfo summary-item="StateOrder"/>
    <DxColumn data-field="ID"/>
    <DxColumn data-field="CompanyName"/>
    <DxColumn data-field="City"/>
    <DxColumn
      data-field="State"
      :group-index="0"
      :sort-order.sync="sortOrder"
    />
    <DxColumn
      name="StateOrder"
      :visible="false"
      :show-in-column-chooser="false"
      :calculateCellValue="calculateCellValue"
    />
  </DxDataGrid>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxGrouping,
  DxGroupPanel,
  DxSummary,
  DxGroupItem,
  DxSortByGroupSummaryInfo
} from 'devextreme-vue/data-grid';

import service from './data.js';

const customers = service.getCustomers();

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxGrouping,
    DxGroupPanel,
    DxSummary,
    DxGroupItem,
    DxSortByGroupSummaryInfo
  },
  data() {
    return {
      dataSource: customers,
      sortOrder: 'asc'
    };
  },
  methods: {
    calculateGroupValue(rowData) {
      let sortValue = rowData.State === "California" ? this.sortOrder !== "desc" ? "aaa" : "zzz" : rowData.State;
      let displayValue = rowData.State;
      return sortValue + ";" + displayValue;
    },
    calculateCellValue(rowData) {
      return rowData.State === "California" ? this.sortOrder !== "desc" ? "aaa" : "zzz" : rowData.State;
    }
  }
};
</script>
