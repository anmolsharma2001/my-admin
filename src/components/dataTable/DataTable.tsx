// 

import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./dataTable.scss";

const DataTable = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Define fixed supplier columns
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "phone", headerName: "Phone Number", width: 160 },
    { field: "address", headerName: "Address", width: 250 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 Replace with your API endpoint
        const res = await fetch("http://localhost:5000/api/suppliers");
        const data = await res.json();

        // MUI DataGrid requires `id` field
        const withId = data.map((item: any, index: number) => ({
          id: item.id || index + 1,
          ...item,
        }));

        setRows(withId);
      } catch (err) {
        console.error("Error fetching suppliers:", err);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dataTable">
      {loading ? (
        <p>Loading...</p>
      ) : rows.length === 0 ? (
        <div className="noDataWrapper">
          <p className="noData">No Data</p>
        </div>
      ) : (
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      )}
    </div>
  );

};

export default DataTable;
