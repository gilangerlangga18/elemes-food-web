import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import RatingControled from "../RatingControled";
import { mainBannerStyles as sx } from "./styles";

function MainBanner() {
  return (
    <Box sx={sx.body}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "600px",
        }}
      >
        <Box sx={sx.BoxLeftItem}>
          <Box sx={sx.boxItem}>
            <Typography sx={sx.goodFood}>Good Food Us Good Mood</Typography>
            <Box>
              <Typography sx={sx.textLeft}>
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </Typography>
              <Box
                sx={{
                  marginBottom: { xs: "30px", md: "unset" },
                  marginTop: { xs: "unset", md: "30px" },
                }}
              >
                <Button sx={sx.btnRes}>Register</Button>
                <Button sx={sx.btnAbout}>About Us</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={sx.boxRight}>
          <Box sx={sx.boxBAckground}>
            <Box sx={sx.boxReceipt5Str}>
              <Box
                component="img"
                src="../../../image/Food/Image.svg"
                sx={sx.imageFood}
              />
              <Box>
                <Typography sx={sx.saladTomato}>Green Salad Tomato</Typography>
                <Typography sx={sx.tomato}>Tomato</Typography>
                <Box>
                  <RatingControled stars="5" />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                component="img"
                src="../../../image/Food/Image.svg"
                sx={{
                  width: { xs: "150px", md: "413px" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
