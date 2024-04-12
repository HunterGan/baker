import { FC } from "react";
import Box from "@mui/material/Box";
import Slider from "./ui/Slider";
import AboutBar from "./ui/AboutBar";
import CategoriesLinks from "./ui/CategoriesLinks";
import DeliveryConditions from "./ui/DeliveryConditions";

const MainPage: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Slider/>
        <DeliveryConditions/>
        <CategoriesLinks/>
        {/* goods */}

        <AboutBar/>
      </Box>
    </>
  )
}

export default MainPage