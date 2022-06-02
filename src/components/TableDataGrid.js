import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "lastName", headerName: "LastName", width: 300 },
  { field: "firstName", headerName: "FirstName", width: 300 },
  { field: "age", headerName: "Age", width: 300 },
];

const TableDataGrid = () => {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const checkLogin = JSON.parse(localStorage.getItem("userMUI"));
  //   setUser(checkLogin);
  // }, []);
  // const newUser = new Array(user);
  // console.log(newUser);
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Mosh", firstName: "Lvey", age: 15 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default TableDataGrid;
