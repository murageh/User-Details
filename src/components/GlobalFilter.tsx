import React from 'react';

const GlobalFilter = ({filter, setFilter}) => {
    return (
        <div className={"filter-div"}>
            <span>
            Search users:{' '}
                <input value={filter || ''}
                       onChange={e => {
                           console.log(e.target.value)
                           setFilter(e.target.value)
                       }}
                       data-testid={'search-filter'}/>
        </span>
        </div>
    )
}

export default GlobalFilter;