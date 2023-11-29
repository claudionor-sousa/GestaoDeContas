import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./style.scss";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name",
    headerName: "Nome",
    width: 150,
    editable: true,
  },
  {
    field: "NameAccount",
    headerName: "Nome da conta",
    width: 150,
    editable: true,
  },
  {
    field: "Parcela",
    headerName: "Parcelas",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Valor",
    headerName: "Valor",
    type: "decimal",
    width: 110,
    editable: true,
    valueGetter: (params) => {
      // Converte a string de valor em um número decimal
      return params.row.Valor
        ? parseFloat(params.row.Valor.replace(",", "."))
        : null;
    },
  },
  {
    field: "DataPag",
    headerName: "Data de Pagamento",
    width: 150,
    type: "date",
    editable: true,
    valueGetter: (params) => {
      // Converte a string de data em um objeto Date
      return params.row.DataPag ? new Date(params.row.DataPag) : null;
    },
  },
  {
    field: "DataVenc",
    headerName: "Data de vencimento",
    width: 150,
    type: "date",
    editable: true,
    valueGetter: (params) => {
      // Converte a string de data em um objeto Date
      return params.row.DataVenc ? new Date(params.row.DataVenc) : null;
    },
  },
];

const rows = [
  {
    id: 1,
    Name: "Claudionor",
    NameAccount: "Conta de luz",
    DataVenc: "2023-12-27",
    DataPag: "2023-11-28",
    Valor: "287,9",
  },
  {
    id: 2,
    Name: "Claudionor",
    NameAccount: "Conta de Água",
    DataVenc: "2023-12-25",
    Valor: "132,9",
  },
  {
    id: 3,
    Name: "Claudionor",
    NameAccount: "Conta de Telefone",
    DataVenc: "2023-12-25",
    Valor: "140,89",
  },
  {
    id: 4,
    Name: "Claudionor",
    NameAccount: "Conta da Renner",
    DataVenc: "2023-12-25",
    Valor: "100",
  },
  {
    id: 5,
    Name: "Claudionor",
    NameAccount: "Cartão de credito",
    DataVenc: "2023-12-25",
    Valor: "380,75",
  },
  {
    id: 6,
    Name: "Claudionor",
    NameAccount: "Parcela da casa",
    Parcela: 32,
    DataVenc: "2023-12-30",
    Valor: "718,78",
  },
  {
    id: 7,
    Name: "Claudionor",
    NameAccount: "Parcela da moto",
    Parcela: 12,
    DataVenc: "2023-12-18",
    Valor: "300,5",
  },
  {
    id: 8,
    Name: "Claudionor",
    NameAccount: "Cartão de credito de lazer",
    DataVenc: "2023-12-25",
    Valor: "678,65",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
