<template>
  <dx-data-grid
    :show-borders="true"
    :data-source="dataSource"
    key-expr="ID"
  >
    <DxGroupPanel :visible="true"/>
    <DxGrouping :auto-expand-all="true"/>
    <dx-column data-field="ID"/>
    <dx-column data-field="CompanyName"/>
    <dx-column data-field="City"/>
    <dx-column
      data-field="State"
      :sort-order.sync="stateSortOrder"
      :group-index="0"
      :calculate-group-value="calculateGroupValue"
      group-cell-template="groupCellTemplate"
    />
    <template #groupCellTemplate="{ data }">
      <div>
      <div v-if="data.data.items">
        {{data.data.items[0].State}}
      </div>
      <div v-if="data.data.collapsedItems">
        {{data.data.collapsedItems[0].State}}
      </div>
      </div>
    </template>
  </dx-data-grid>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel
} from 'devextreme-vue/data-grid';

import service from './data.js';

const customers = service.getCustomers();

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel
  },
  data() {
    return {
      dataSource: customers,
      stateSortOrder: 'asc'
    };
  },
  methods: {
    calculateGroupValue(rowData) {
      if (rowData.State === "California")
        return this.stateSortOrder === "asc" ? "zzz" : "aaa";
      else
        return rowData.State;
    }
  }
};
</script>
