import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    width: 100,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "firstName",
    headerName: "First name",
    type: "string",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    type: "string",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 400,
    disableColumnMenu: true,
  },
];

const Dashboard = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
      // style={{ border: "5px solid gold" }}
    >
      <Typography
        component="h1"
        variant="h4"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, pt: 1, pb: 1 }}
      >
        Employees table
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={[]}
          columns={columns}
          getRowId={(r) => r.sub}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
