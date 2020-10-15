# DataGrid - How to apply custom sorting to a grouped column

This example illustrates two solutions to sort a grouped column. Here, the California group is always displayed at the top.

 1. The first solution is suitable for very simple cases when paging and group summary are not used. Use the [calculateGroupValue](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue) option to sort groups in a custom way. The function also returns the same values used for sorting and displays them in group headers. Use the [groupCellTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellTemplate) option to revert the group header text to its initial value. 

 Note that the [remoteOperations](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option should be set to **false**.

 2. The second solution is more universal. It correctly displays summaries and group row texts. It is possible to use remote operations (except the group paging) if a dedicated field is used on the server to sort groups. Use a calculated hidden column to create required cell values to sort them by Summary Group Info.