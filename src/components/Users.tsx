import React, {useEffect, useMemo, useState} from "react";
import axios from "axios"

import Table from "./Table";
import customDateFormat from "./DateUtilities";
import LoadingData from "./LoadingData";

import {getSourceUrl} from '../resources/SourceData';

const Users = () => {

    const [data, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            //URL to fetch data from goes here.
            const result = await axios.get(getSourceUrl());
            setData(result.data);
            setDataLoaded(true);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Registered Users',
                columns: [
                    {
                        Header: 'User id',
                        accessor: 'id',
                    }, {
                        Header: 'Phone Number',
                        accessor: 'phone_number',
                    }, {
                        Header: 'User since',
                        accessor: user => customDateFormat(user.created_on),
                    },
                    {
                        Header: 'Level',
                        accessor: 'level',
                    },
                ],
            },

        ],
        []
    );

    return (
        dataLoaded ?
            <div className="Users">
                <Table columns={columns} data={data}/>
            </div>
            :
            <LoadingData/>
    );
}

export default Users;