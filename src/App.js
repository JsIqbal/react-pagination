import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = () => {
    const [selectedRow, setSelectedRow] = useState(null);

    const data = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Bob", age: 40 },
    ];

    const handleRowClick = (id) => {
        setSelectedRow(id);
    };

    return (
        <>
            {selectedRow && (
                <div className="alert alert-primary mb-3">
                    <a href="#">Link to top of table</a>
                </div>
            )}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.id}
                            onClick={() => handleRowClick(item.id)}
                            className={
                                selectedRow === item.id ? "table-primary" : ""
                            }
                        >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
