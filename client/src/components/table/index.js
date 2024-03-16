import React from 'react';

const Table = ({ headers, data, onDelete, onUpdate }) => {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    {headers?.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {data ? data?.map((rowData) => (
                    <tr key={rowData?.id}>
                        <td>{rowData?.fullName}</td>
                        <td>{rowData?.age}</td>
                        <td>{rowData?.city}</td>
                        <td>
                            <button onClick={() => onDelete(rowData?.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => onUpdate(rowData?.id)}>Update</button>
                        </td>
                    </tr>
                )) : null}
            </tbody>
        </table>
    );
};

export default Table;
