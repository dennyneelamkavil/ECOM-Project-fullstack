import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "../assets/json/products";

export default function MyTable() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(data.DUMMY_DATA);
  }, []);

  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
