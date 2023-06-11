import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "../Carousel";
import { categoryReceiptstyles as sx } from "./styles";

function CategoryReceipt() {
  return (
    <Box sx={sx.body}>
      <Box sx={sx.container}>
        <Typography sx={sx.typoCategory}>Browser Our Category</Typography>
        <Typography sx={sx.typoReceipt}>Receipt</Typography>
        <Box sx={sx.CarouselReceipt}>
          <Carousel />
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryReceipt;
