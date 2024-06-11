import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const EditProduct = () => {
  return (
    <Box margin={5}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
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
              <ArrowForwardIosIcon
                style={{ color: "#001EB9", fontSize: "25px" }}
              />
            </Typography>
            <Typography sx={{ color: "#001EB9", marginLeft: "10px" }}>
              Edit Product
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            xs={5}
            display={"flex"}
            alignItems="center"
            marginBottom={4}
          >
            <p style={{ fontSize: "20px", marginRight: "20px" }}>SKU</p>
            <TextField fullWidth variant="filled" />
          </Grid>

          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            gap={15}
            marginBottom={4}
          >
            <Grid item xs={5} display={"flex"} alignItems="center">
              <p style={{ fontSize: "20px", marginRight: "20px" }}>Name</p>
              <TextField fullWidth variant="filled" />
            </Grid>

            <Grid item xs={4} display={"flex"} alignItems="center">
              <p style={{ fontSize: "20px", marginRight: "20px" }}>QTY</p>
              <TextField fullWidth variant="filled" />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1"> Product Description </Typography>
            <Typography sx={{ fontSize: "12px", color: "#969191" }}>
              A small Description About the Product
            </Typography>
          </Grid>
          <Grid item xs={10} marginBottom={4}>
            <TextField multiline rows={4} fullWidth variant="filled" />
          </Grid>

          <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item display={'flex'} gap={8}>
              <Typography variant="body1"> Product Images </Typography>
              <Button variant="text" color="primary" sx={{textDecoration: 'underline'}}> Add Images </Button>
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

          <Grid item xs={12}display={'flex'} justifyContent={'flex-end'}marginRight={30}>
            <Button variant="contained"> Save Changes </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProduct;
