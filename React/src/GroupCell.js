import React from 'react';

export default function GroupCell(options) {
    let column = options.column;
    let displayValue = options.value.split(";")[1];
    return (
        <div>{column.caption + ": " + displayValue}</div>
    );
}
