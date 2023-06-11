import "./App.css";
import CategoryReceipt from "./Component/CategoryReceipt";
import MainBanner from "./Component/MainBanner";
import { Box } from "@mui/material";
import TrendingReceipt from "./Component/TrendingReceipt";
import Footer from "./Component/Footer";

function App() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <MainBanner />
      <CategoryReceipt />
      <TrendingReceipt />
      <Footer />
    </Box>
  );
}

export default App;
