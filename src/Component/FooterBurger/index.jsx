import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";

function FooterBurger() {
  return (
    <Box
      sx={{
        width: "100vh",
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-120px",
      }}
    >
      <Box
        sx={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "10px",
            color: "#757575",
          }}
        >
          <MenuIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
          Menu
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "10px",
            color: "#757575",
          }}
        >
          <MenuIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
          Promotions
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "10px",
            color: "#757575",
          }}
        >
          <MenuIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
          Others
        </Button>
      </Box>
    </Box>
  );
}

export default FooterBurger;
