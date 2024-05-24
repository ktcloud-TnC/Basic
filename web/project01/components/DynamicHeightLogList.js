// DynamicHeightLogList.js
import React from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const DynamicHeightLogList = ({ logs }) => {
    const cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
    });

    const rowRenderer = ({ key, index, style, parent }) => {
        const log = logs[index];
        return (
            <CellMeasurer
                key={key}
                cache={cache}
                parent={parent}
                columnIndex={0}
                rowIndex={index}>
                <div style={style}>
                    {log.message}
                </div>
            </CellMeasurer>
        );
    };

    return (
        <AutoSizer>
            {({ width, height }) => (
                <List
                    width={width}
                    height={height}
                    rowCount={logs.length}
                    rowHeight={cache.rowHeight}
                    rowRenderer={rowRenderer}
                    deferredMeasurementCache={cache}
                    overscanRowCount={3}
                />
            )}
        </AutoSizer>
    );
};

export default DynamicHeightLogList;