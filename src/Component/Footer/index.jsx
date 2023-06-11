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
          <Box sx={sx.icon}>
            <PhoneIcon sx={sx.iconFooter} />
            <EmailIcon sx={sx.iconFooter} />
            <InstagramIcon sx={sx.iconFooter} />
          </Box>
        </Box>
        <Box sx={sx.boxItemFooter}>
          <Typography sx={sx.textUp}>Categories</Typography>
          <Box sx={sx.itemFooter}>
            <Typography>Cupcake</Typography>
            <Typography>Pizza</Typography>
            <Typography>Kebab</Typography>
            <Typography>Salmon</Typography>
            <Typography>Dougnut</Typography>
          </Box>
        </Box>
        <Box sx={sx.boxItemFooter}>
          <Typography sx={sx.textUp}>About Us</Typography>
          <Box sx={sx.itemFooter}>
            <Typography>About Us</Typography>
            <Typography>FAQ</Typography>
            <Typography>Report Problem</Typography>
          </Box>
        </Box>
        <Box sx={sx.boxLeft}>
          <Typography sx={sx.textUp}>Newsletter</Typography>
          <Box sx={sx.textGEt}>
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
              <Button sx={sx.btnSend}>SEND</Button>
            </Box>
            <Box sx={sx.boxCntct}>
              <Box sx={sx.boxContact}>
                <PhoneIcon sx={sx.colorIcon} />
                <Typography> elemesid@gmail.com</Typography>
              </Box>
              <Box sx={sx.boxContact}>
                <EmailIcon sx={sx.colorIcon} />
                <Typography> 0888 1111 2222 </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={sx.textCopyright}>
        © 2021 Elemes id. All rights reserved
      </Typography>
      <FooterBurger />
    </Box>
  );
}

export default Footer;
