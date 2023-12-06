// DataTable.js
import React, { useState, useEffect } from 'react';
import { getGoldApi, deleteGoldApi } from '../Api/goldApi';
import { FaTrash } from 'react-icons/fa';

const DataTable = () => {
    const [goldData, setGoldData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getGoldApi();
                console.log(response);

                const formattedData = response.map((dataItem, index) => {
                    const createdAtDate = new Date(dataItem.timestamp);
                    if (!createdAtDate.getTime() || isNaN(createdAtDate.getTime()) || createdAtDate.getFullYear() === 1970) {
                        console.error(`Invalid date format at index ${index}: ${dataItem.timestamp}`);
                        return { ...dataItem, createdAt: null, time: null };
                    }

                    return {
                        ...dataItem,
                        createdAt: createdAtDate.toLocaleDateString(),
                        time: createdAtDate.toLocaleTimeString(),
                    };
                });

                setGoldData(formattedData || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteGoldApi(id);
            // If deletion is successful, fetch data again to update the table
            const response = await getGoldApi();
            setGoldData(response || []);
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <h2>List of Check</h2>
            </div>
            <div className='container'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Weight In Gms</th>
                                <th scope="col">Purity </th>
                                <th scope="col">Gold Price</th>
                                <th scope="col">Date </th>
                                <th scope="col">Time</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {goldData.map((data, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{data.weight}</td>
                                    <td>{data.purity}</td>
                                    <td>{data.calculatedRate}</td>
                                    <td>{data.createdAt}</td>
                                    <td>{data.time}</td>
                                    <td>

                                        <FaTrash onClick={() => handleDelete(data.id)} />

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default DataTable;
