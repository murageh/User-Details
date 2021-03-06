import {Fragment} from "react";
import {useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import "../styles/App.css";

import GlobalFilter from "./GlobalFilter";
import BottomNavBar from "./BottomNavBar";


const Table = ({columns, data}) => {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0, pageSize: 8}
        },
        useGlobalFilter, useSortBy, usePagination
    );

    const {globalFilter, pageIndex, pageSize} = state;

    // Render the UI for your table
    return (
        <Fragment>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>

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
            <BottomNavBar
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                pageSize={pageSize}
                pageCount={pageCount}
                setPageSize={setPageSize}
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}/>
        </Fragment>
    )
}

export default Table;