import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Box, Button, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "../utils/axios";
import { toast } from "react-toastify";


const Products = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("http://localhost:5000/api/products");

        setCustomers(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Something Went Wrong!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    })();
  }, []);

  return (
    <Box margin={5}>
      <NavBar title="P R O D U C T S" />

      <Grid container justifyContent="center">
        <TableContainer sx={{ maxWidth: "70%", margin: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#001EB9" }}>SKU</TableCell>
                <TableCell sx={{ color: "#001EB9" }}>IMAGE</TableCell>
                <TableCell sx={{ color: "#001EB9" }}>PRODUCT NAME</TableCell>
                <TableCell sx={{ color: "#001EB9" }}>PRICE</TableCell>
                <TableCell sx={{ color: "#001EB9" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((item) => (
                <TableRow key={item.id}>
                  <TableCell> {item.sku} </TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:5000/${item.images[0].path}`}
                      alt={item.name}
                      style={{ width: "50px" }}
                    />
                  </TableCell>
                  <TableCell> {item.name} </TableCell>
                  <TableCell> {item.price} </TableCell>
                  <TableCell>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon />
                    </Button>
                    <Button>
                      <StarBorderIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Products;
