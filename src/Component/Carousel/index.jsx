import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { carouselStyles as sx } from "./styles";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for carousel items
  const carouselItems = [
    {
      id: 1,
      title: "Cupcake",
      img: "../../../image/Icon/Frame.svg",
      qty: "22",
      color: "#F0FEEB",
    },
    {
      id: 2,
      title: "Pizza",
      img: "../../../image/Icon/pizza 1.svg",
      qty: "25",
      color: "#E6F3F5;",
    },
    {
      id: 3,
      title: "Kebab",
      img: "../../../image/Icon/kebab 1.svg",
      qty: "22",
      color: "#EAEEFA",
    },
    {
      id: 4,
      title: "Salmon",
      img: "../../../image/Icon/salmon 1.svg",
      qty: "22",
      color: "#F9EEF3",
    },
    {
      id: 5,
      title: "Doughnut",
      img: "../../../image/Icon/doughnut 1.svg",
      qty: "11",
      color: "#F3F7D9",
    },
    {
      id: 6,
      title: "Cupcake",
      img: "../../../image/Icon/salmon 1.svg",
      qty: "22",
      color: "#F0FEEB",
    },
    {
      id: 7,
      title: "Cupcake",
      img: "../../../image/Icon/Frame.svg",
      qty: "22",
      color: "#F3F7D9",
    },
  ];

  const visibleItems = carouselItems.slice(currentIndex, currentIndex + 5);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "unset", md: "80%" },
      }}
    >
      <Box className="categoryCarousel" sx={sx.container}>
        {visibleItems.map((item) => (
          <Box
            sx={{
              position: "relative",
              margin: "10px",
            }}
          >
            <Card
              key={item.id}
              sx={{
                width: "230px",

                height: "173px",
                backgroundColor: item.color,

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                overflow: "hidden",
                "&:hover": {
                  height: "200px",
                  transition: "all 0.5s",
                },
                "&:hover:before": {
                  opacity: "0.3",
                  height: "100%",
                  transition: "all 0.5s",
                  overflow: "hidden",
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
              <CardContent style={sx.cardContentBox}>
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: "47px",
                    height: "47px",
                  }}
                />
                <Typography sx={sx.textTitle}>{item.title}</Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  {item.qty} item
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={sx.boxBtn}>
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{
            width: "113px",
            height: "50px",
            backgroundColor: "#8BAC3E",
            borderRadius: "100px",
            display: { xs: "none", md: "flex" },
            gap: "10px",
            "&:hover": {
              background: "#8BAC3E",
            },
          }}
        >
          <NavigateBeforeIcon sx={sx.iconBtn} />
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentIndex === carouselItems.length - 5}
          sx={{
            "&:hover": {
              background: "#8BAC3E",
            },
            width: "113px",
            height: "50px",
            backgroundColor: "#8BAC3E",
            borderRadius: "100px",
            display: { xs: "none", md: "flex" },
            gap: "10px",
          }}
        >
          Next
          <NavigateNextIcon sx={sx.iconBtn} />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
