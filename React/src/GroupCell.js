import React from 'react';

export default function GroupCell(data) {
    let cell;
    if(data.data.items) {
        cell = <div>State: {data.data.items[0].State}</div>
    } else {
        cell = <div>State: {data.data.collapsedItems[0].State}</div>
    }
    return (
        <div>{cell}</div>
    );
}
