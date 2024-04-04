import { FC } from "react";
import Box from "@mui/material/Box";
import Slider from "@/_app/routes/layouts/ui/components/Slider";
import DeliveryConditions from "@/_app/routes/layouts/ui/components/DeliveryConditions";
import CategoriesLinks from "@/_app/routes/layouts/ui/components/CategoriesLinks";

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
      </Box>
    </>
  )
}

export default MainPage