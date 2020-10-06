# DataGrid - How to apply custom sorting to a grouped column

 Use the [calculateGroupValue](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue) option to sort groups in a custom way. The function also returns the same values used for sorting and displays them in group headers. Use the [groupCellTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellTemplate) option to revert the group header text to its initial value. In this demo, the California group is always displayed at the bottom.

 Note that the [remoteOperations](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option should be set to **false**.