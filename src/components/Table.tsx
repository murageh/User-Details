import {Fragment} from "react";
import {usePagination, useSortBy, useTable} from "react-table";
import "../styles/App.css";


const Table = ({columns, data}) => {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        state: {pageIndex, pageSize},
    } = useTable(
        {
            columns,
            data
        },
        useSortBy, usePagination
    );

    // Render the UI for your table
    return (
        <Fragment>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
              </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className={"bottom-nav"}>
                <button onClick={() => previousPage()} className={"nav-button"}>Previous Page</button>
                <button onClick={() => nextPage()} className={"nav-button"}>Next Page</button>
            </div>
        </Fragment>
    )
}

export default Table;