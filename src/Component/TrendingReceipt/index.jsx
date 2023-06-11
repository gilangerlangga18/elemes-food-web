import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DataTrending from "../../DataTrending.json";
import RatingControled from "../RatingControled";
import { stylesTrensdingReceipt as sx } from "./styles";

function TrendingReceipt() {
  return (
    <Box sx={sx.body}>
      <Box sx={sx.conatiner}>
        <Typography sx={sx.textTrending}>Browser Our Trending</Typography>
        <Typography sx={sx.textReceipt}>Receipt</Typography>
        <Box className="categoryCarousel" sx={sx.boxItem}>
          {DataTrending.map((item) => (
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "350px", md: "287.5px" },
                  height: { xs: "270px", md: "306px" },
                  borderRadius: "17px",
                  boxShadow: "0px 11px 39px rgba(0, 0, 0, 0.07)",
                  backgroundColor: item.color,
                  alignItems: "start",
                  justifyContent: "space-evenly",
                  cursor: "pointer",
                  "&:hover:before": {
                    opacity: "0.2",
                  },
                  "&::before": {
                    content: '""',
                    backgroundImage: 'url("../../image/Logo/115 1.svg")',
                    position: "absolute",
                    backgroundSize: "contain",
                    top: "0",
                    right: "0",
                    left: "0",
                    bottom: "0",
                    opacity: "0",
                  },
                }}
              >
                <Box component="img" src={item.img} sx={sx.image} />
                <Box sx={sx.typoItem}>
                  <Typography sx={sx.TitileItem}>{item.title}</Typography>
                  <Typography sx={sx.jenisItem}>{item.jenis}</Typography>
                  <Box
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <RatingControled stars={item.bintang} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Button sx={sx.btnReceipt}>All Receipt</Button>
      </Box>
    </Box>
  );
}

export default TrendingReceipt;
