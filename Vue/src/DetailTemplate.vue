<template>
  <div> 
      <dx-button
          text="Select row"
          @click="buttonClick($event, key)"
        />
      
    <dx-data-grid
      :data-source="dataSource"
      :show-borders="true"
      :focused-row-enabled="true"
      :ref="'detailGrid' + key"
    >
      <dx-column data-field="Subject"/>
      <dx-column
        data-field="StartDate"
        data-type="date"
      />
      <dx-column
        data-field="DueDate"
        data-type="date"
      />
      <dx-column data-field="Priority"/>
    </dx-data-grid>
  </div>
</template>
<script>

import { DxButton } from 'devextreme-vue';
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import service from './data.js';

const tasks = service.getTasks();

export default {
  components: { DxButton, DxDataGrid, DxColumn },
  props: {
    templateData: {
      type: Object,
      default: ()=>{}
    }
  },
  data() {
    return {
      key: this.templateData.key,
      dataSource: this.getTasks(this.templateData.key)
    };
  },
  methods: {
    getTasks(key) {
      return new DataSource({
        store: new ArrayStore({
          data: tasks,
          key: 'ID'
        }),
        filter: ['EmployeeID', '=', key]
      });
    },
    buttonClick(e, key) {
      this.$refs[`detailGrid${key}`].instance.option("focusedRowIndex", 0);
    }
  }
};
</script>
<style>
.master-detail-caption {
    padding: 0 0 5px 10px;
    font-size: 14px;
    font-weight: bold;
}</style>