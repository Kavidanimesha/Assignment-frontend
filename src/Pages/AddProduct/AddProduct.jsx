import React, { useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    description: "",
    qty: "",
    images: [],
  });

  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("sku", formData.sku);
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("qty", formData.qty);

    Array.from(formData.images).forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await axios.post("http://localhost:5000/api/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Product Created Successfully", {
          position: "top-right",
          autoClose: 5000,
        });

        // form clear
        setFormData({
          sku: "",
          name: "",
          price: "",
          description: "",
          qty: "",
          images: [],
        });
      } else {
        toast.error("Something Went Wrong!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Cannot Create Product", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <Box margin={5}>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button sx={{ color: "black", fontFamily: "Satoshi, sans-serif" }}>
            Admin <ArrowDropDownIcon />
          </Button>
          <Brightness1Icon sx={{ fontSize: "50px", color: "#001EB9" }} />
        </Toolbar>
      </AppBar>

      <Grid container margin={6}>
        <Grid container display={"flex"} marginBottom={5}>
          <Grid item xs={12} display={"flex"} alignItems="center">
            <Typography variant="h4">
              PRODUCTS
              <ArrowForwardIosIcon style={{ color: "#001EB9", fontSize: "25px" }} />
            </Typography>
            <Typography sx={{ color: "#001EB9", marginLeft: "10px" }}>
              Add New Product
            </Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid container display={"flex"} alignItems={"center"} gap={15}>
              <Grid item xs={5} display={"flex"} alignItems="center" marginBottom={4}>
                <p style={{ fontSize: "20px", marginRight: "20px" }}>SKU</p>
                <TextField
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                  }}
                  name="sku"
                  value={formData.sku}
                  onChange={handleClick}
                />
              </Grid>
              <Grid item xs={4} display={"flex"} alignItems="center" marginBottom={4}>
                <p style={{ fontSize: "20px", marginRight: "20px" }}>Price</p>
                <TextField
                  fullWidth
                  variant="filled"
                  name="price"
                  value={formData.price}
                  onChange={handleClick}
                />
              </Grid>
            </Grid>

            <Grid container display={"flex"} alignItems={"center"} gap={15} marginBottom={4}>
              <Grid item xs={5} display={"flex"} alignItems="center">
                <p style={{ fontSize: "20px", marginRight: "20px" }}>Name</p>
                <TextField
                  fullWidth
                  variant="filled"
                  name="name"
                  value={formData.name}
                  onChange={handleClick}
                />
              </Grid>

              <Grid item xs={4} display={"flex"} alignItems="center">
                <p style={{ fontSize: "20px", marginRight: "20px" }}>QTY</p>
                <TextField
                  fullWidth
                  variant="filled"
                  name="qty"
                  value={formData.qty}
                  onChange={handleClick}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1"> Product Description </Typography>
              <Typography sx={{ fontSize: "12px", color: "#969191" }}>
                A small Description About the Product
              </Typography>
            </Grid>
            <Grid item xs={10} marginBottom={4}>
              <TextField
                multiline
                rows={4}
                fullWidth
                variant="filled"
                name="description"
                value={formData.description}
                onChange={handleClick}
              />
            </Grid>

            <Grid container display={"flex"} flexDirection={"column"}>
              <Grid item display={"flex"} gap={8}>
                <Typography variant="body1"> Product Images </Typography>
                <input
                  type="file"
                  multiple
                  name="images"
                  onChange={handleFileChange}
                />
              </Grid>

              <Grid item>
                <Typography sx={{ fontSize: "12px", color: "#969191" }}>
                  JPEG, PNG, SVG or GIF
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#969191" }}>
                  (Maximum file size 50MB)
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"} marginRight={30}>
              <Button variant="contained" type="submit">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
};

export default AddProduct;