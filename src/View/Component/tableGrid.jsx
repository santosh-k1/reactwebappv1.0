import React from 'react';
import ReactDataGrid from 'react-data-grid';
//import ReactDataGrid from 'react-data-grid-addons';
const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }];
const rows = [{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }
,{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' },
{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }];
const rowGetter = rowNumber => rows[rowNumber];

class TableGrid extends React.Component {
    render( ) {
      return (
        <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={500} />
      
      );
  
    }
  
  }
  export default TableGrid;
  

  