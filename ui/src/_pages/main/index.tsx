import { FC } from "react";
import Box from "@mui/material/Box";
import Slider from "@/_app/routes/layouts/ui/components/Slider";
import DeliveryConditions from "@/_app/routes/layouts/ui/components/DeliveryConditions";

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
      </Box>
    </>
  )
}

export default MainPage