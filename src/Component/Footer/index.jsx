import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterBurger from "../FooterBurger";
import { footerStyles as sx } from "./styles";

function Footer() {
  return (
    <Box sx={sx.body}>
      <Box sx={sx.container}>
        <Box sx={sx.boxFooter}>
          <Box
            component="img"
            src="../../../image/Logo/Logo.svg"
            sx={{
              height: "50px",
            }}
          />
          <Typography sx={sx.textAlamat}>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "40px",
            }}
          >
            <PhoneIcon sx={sx.iconFooter} />
            <EmailIcon sx={sx.iconFooter} />
            <InstagramIcon sx={sx.iconFooter} />
          </Box>
        </Box>
        <Box sx={sx.categories}>
          <Typography sx={sx.fontTitleFooter}>Categories</Typography>
          <Box sx={sx.itemCategories}>
            <Typography>Cupcake</Typography>
            <Typography>Pizza</Typography>
            <Typography>Kebab</Typography>
            <Typography>Salmon</Typography>
            <Typography>Dougnut</Typography>
          </Box>
        </Box>
        <Box sx={sx.itemCategories}>
          <Typography sx={sx.fontTitleFooter}>About Us</Typography>
          <Box sx={sx.itemCategories}>
            <Typography>About Us</Typography>
            <Typography>FAQ</Typography>
            <Typography>Report Problem</Typography>
          </Box>
        </Box>
        <Box sx={sx.BoxRight}>
          <Typography sx={sx.fontTitleFooter}>Newsletter</Typography>
          <Box
            sx={{
              width: "245px",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            <Typography>
              Get now free 50% discount for alll products on your first order
            </Typography>
            <Box sx={sx.boxInput}>
              <Input
                placeholder="Your Email Address"
                sx={{
                  "&:hover": {
                    borderBottom: "unset",
                  },
                }}
              />
              <Button
                sx={{
                  height: "40px",
                  color: "white",
                  backgroundColor: "#8BAC3E",
                }}
              >
                SEND
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <PhoneIcon
                  sx={{
                    color: "#8BAC3E",
                  }}
                />
                <Typography> elemesid@gmail.com</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <EmailIcon
                  sx={{
                    color: "#8BAC3E",
                  }}
                />
                <Typography> 0888 1111 2222 </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={sx.footerTag}>
        © 2021 Elemes id. All rights reserved
      </Typography>
      <FooterBurger />
    </Box>
  );
}

export default Footer;
