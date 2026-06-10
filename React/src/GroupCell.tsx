import type { DataGridTypes } from 'devextreme-react/data-grid';

function GroupCell(options: DataGridTypes.ColumnGroupCellTemplateData): JSX.Element {
  const { column } = options;
  const displayValue = options.value.split(';')[1];
  return (
    <div>{`${column.caption}: ${displayValue}`}</div>
  );
}

export default GroupCell;
