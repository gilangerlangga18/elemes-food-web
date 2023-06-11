import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavbarStyles as sx } from "./styles";

function Navbar() {
  return (
    <Box sx={sx.body}>
      <Box sx={sx.container}>
        <Box
          component="img"
          src="../../../image/Logo/Logo.svg"
          sx={{
            cursor: "pointer",
            width: { xs: "150px", md: "unset" },
          }}
        ></Box>
        <Box sx={sx.boxHome}>
          <Typography sx={sx.cursor}> Home</Typography>
          <Typography sx={sx.cursor}>About</Typography>
          <Typography sx={sx.cursor}>Promotions</Typography>
          <Typography sx={sx.cursor}>Blogs</Typography>
          <Typography sx={sx.cursor}>Cpntact Us</Typography>
        </Box>
        <Box
          sx={{
            display: "felx",
            gap: "20px",
          }}
        >
          <Button className="btn" sx={sx.btnLogin}>
            Login
          </Button>
          <Button sx={sx.btnRes} className="btn">
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
