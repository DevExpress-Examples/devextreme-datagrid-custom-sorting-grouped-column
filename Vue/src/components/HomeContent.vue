<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  DxColumn,
  DxDataGrid,
  DxGroupItem,
  DxGrouping,
  DxGroupPanel,
  DxPaging,
  DxSortByGroupSummaryInfo,
  DxSummary,
} from 'devextreme-vue/data-grid';
import type { SortOrder } from 'devextreme/common';
import { customers } from '../data';
import type { Customer } from '../data';

const sortOrder = ref<SortOrder>('asc');

function calculateGroupValue(this: { sortOrder?: string }, rowData: Customer): string {
  const isReversed = this.sortOrder === 'desc';
  let sortValue = rowData.State;
  if (rowData.State === 'California') {
    sortValue = isReversed ? 'zzz' : 'aaa';
  }
  const displayValue = rowData.State;
  return `${sortValue};${displayValue}`;
}

function calculateCellValue(rowData: Customer): string {
  const isReversed = sortOrder.value === 'desc';
  let sortValue = rowData.State;
  if (rowData.State === 'California') {
    sortValue = isReversed ? 'zzz' : 'aaa';
  }
  return sortValue;
}
</script>
<template>
  <div>
    <h2>The use of calculateGroupValue and groupCellTemplate</h2>
    <DxDataGrid
      :show-borders="true"
      :data-source="customers"
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
        <div>{{ `${data.column.caption}: ${data.value.split(';')[1]}` }}</div>
      </template>
    </DxDataGrid>

    <h2>The use of a calculated hidden column and Summary</h2>
    <DxDataGrid
      :show-borders="true"
      :data-source="customers"
      key-expr="ID"
    >
      <DxGroupPanel :visible="true"/>
      <DxGrouping :auto-expand-all="true"/>
      <DxPaging :page-size="10"/>
      <DxSummary>
        <DxGroupItem
          column="StateOrder"
          summary-type="min"
          :align-by-column="true"
        />
      </DxSummary>
      <DxSortByGroupSummaryInfo summary-item="StateOrder"/>
      <DxColumn data-field="ID"/>
      <DxColumn data-field="CompanyName"/>
      <DxColumn data-field="City"/>
      <DxColumn
        data-field="State"
        :group-index="0"
        v-model:sort-order="sortOrder"
      />
      <DxColumn
        name="StateOrder"
        :visible="false"
        :show-in-column-chooser="false"
        :calculate-cell-value="calculateCellValue"
      />
    </DxDataGrid>
  </div>
</template>
