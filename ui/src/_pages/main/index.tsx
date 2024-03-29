import DeliveryConditions from "@/_app/routes/layouts/ui/components/DeliveryConditions";
import Slider from "@/_app/routes/layouts/ui/components/Slider";
import Box from "@mui/material/Box";
import { FC } from "react";

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