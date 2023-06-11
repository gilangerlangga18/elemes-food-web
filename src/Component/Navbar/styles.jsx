export const NavbarStyles = {
  body: {
    position: "relative",
    height: "74px",
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "20px 0 20px 0",
  },
  boxHome: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "space-around",
    width: "30%",
    fontSize: "14px",
    lineHeight: "22px",
  },
  cursor: {
    cursor: "pointer",
  },
  btnLogin: {
    backgroundColor: "#F2F2F2",
    borderRadius: "20px",
    width: "98px",
    height: "42px",
    color: "black",
    display: { xs: "none", md: "unset" },
    marginRight: "20px",
    "&:hover": {
      background: "#8BAC3E",
      color: "white",
    },
  },
  btnRes: {
    backgroundColor: "#8BAC3E",
    borderRadius: "20px",
    width: "142px",
    height: "42px",
    color: "white",
    "&:hover": {
      background: "#F2F2F2",
      color: "black",
    },
  },
};
