// const key = 'TODO';
// const sheetsId = 'TODO';
const state = {
    sortColumn: 'category',
    rows: [],
    filteredRows: [],
    columns: {
        'category': {
            name: 'Category',
            data_type: 'string',
            values: [],
            filters: [],
            filterable: true,
            sortable: true,
            sortDirection: 'asc',
            colWidth: '200px'
        },
        'description': {
            name: 'Description',
            data_type: 'string',
            values: [],
            filterable: false,
            sortDirection: 'asc',
            sortable: true
        },
        'tags': {
            name: 'Tags',
            data_type: 'list',
            values: [],
            filters: [],
            filterable: true,
            sortable: true,
            sortDirection: 'asc',
            colWidth: '250px'
        }
    }
};