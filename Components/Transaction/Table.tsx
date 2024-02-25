"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Link from "next/link";

function createData(
  description: string,
  amount: number,
  category: string
) {
  return { description, amount, category };
}

export default function BasicTable() {
  const[arrayData,setarrayData]=React.useState([])

  React.useEffect(()=>{
    if (typeof localStorage !== 'undefined') {
      const listingData = JSON.parse(localStorage.getItem("data"))
      setarrayData(listingData)
    }
  },[])
  
  
  return (
    <div className="main-container">
      <h2 className="main-heading">Transaction List</h2>
      <Link href="/add-transaction">
      <Button className="select-btn" variant="contained">Add Transaction</Button>
        </Link>
      <div className="main-table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayData?.length> 0 &&
              arrayData?.map((row) => (
                <TableRow
                  key={row.description}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.description}
                  </TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
