import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";

export default function NavBar({title}) {

  const navigate = useNavigate();

  const handleNewProductClick = () => {
    navigate("/addproduct");
  };

  const handleFavorite = () => {
    navigate("/favorite")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
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

      <Grid container marginBottom={5}>
        <Typography variant="h4"> {title} </Typography>
      </Grid>

      <Grid container display={"flex"}>
        <Grid item xs={9}>
          <TextField
            placeholder="Search for Products"
            variant="outlined"
            sx={{
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
              },
              width: "800px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "25px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                      },
                    }}
                  >
                    <SearchIcon />
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{ marginRight: "10px", height: "50px", width: "260px" }}
            onClick={handleNewProductClick}
          >
            New Product
          </Button>
          <Button variant="outlined" sx={{ height: "50px" }} onClick={handleFavorite}>
            <GradeIcon sx={{ fontSize: "30px" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
