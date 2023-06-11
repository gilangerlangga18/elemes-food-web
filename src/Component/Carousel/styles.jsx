export const carouselStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    overflow: { xs: "auto", md: "unset" },
    width: { xs: "100%", md: "unset" },
  },

  cardContentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "22px",
  },
  boxBtn: {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    alignItems: "center",
    marginRight: "100px",
    marginTop: { xs: "0", md: "50px" },
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  iconBtn: {
    display: "flex",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "50%",
    color: "#8BAC3E",
    alignSelf: "center",
  },
};
