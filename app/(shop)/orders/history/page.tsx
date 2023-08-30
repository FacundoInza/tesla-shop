"use client";

import { MetadataPage } from "@/interfaces";
import { Chip, Grid, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Link from "next/link";
import React from "react";

const metadata: MetadataPage = {
  title: "Order History",
  description: "Order History Page of client",
};

const colums: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    width: 300,
  },
  {
    field: "paid",
    headerName: "Paid",
    width: 200,
    description: "Show info if the order is paid or not",
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="paid" variant="outlined" />
      ) : (
        <Chip color="error" label="pending" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "Order",
    width: 200,
    description: "Show info if the order is paid or not",
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link
          href={`/orders/${params.row.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="body1" component="span">
            Ver orden
          </Typography>
        </Link>
      );
    },
  },
];

const row = [
  { id: 1, paid: true, fullName: "Snow" },
  { id: 2, paid: true, fullName: "Lannister" },
  { id: 3, paid: true, fullName: "Lannister" },
  { id: 4, paid: true, fullName: "Stark" },
  { id: 5, paid: false, fullName: "Targaryen" },
  { id: 6, paid: false, fullName: "Melisandre" },
  { id: 7, paid: false, fullName: "Clifford" },
  { id: 8, paid: true, fullName: "Frances" },
  { id: 9, paid: true, fullName: "Roxie" },
];

const HistoryPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        History of orders
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={row}
            columns={colums}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          ></DataGrid>
        </Grid>
      </Grid>
    </>
  );
};

export default HistoryPage;
