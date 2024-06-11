import React from "react";
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

const Favorite = () => {
  const rows = [
    { id: 1, SKU: "122", image: "xyz", name: "ki", price: "13" },
    { id: 2, SKU: "124", image: "ads", name: "bt", price: "64" },
    { id: 3, SKU: "435", image: "gae", name: "kj", price: "48" },
    { id: 4, SKU: "127", image: "hgh", name: "hy", price: "18" },
    { id: 5, SKU: "165", image: "tuy", name: "fd", price: "87" },
    { id: 6, SKU: "478", image: "gcg", name: "xg", price: "85" },
  ];

  return (
    <Box margin={5}>
      <NavBar title="FAVORITE PRODUCTS" />

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
              {rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell> {item.SKU} </TableCell>
                  <TableCell> {item.image} </TableCell>
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

export default Favorite;
