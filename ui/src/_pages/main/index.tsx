import { FC } from "react";
import Box from "@mui/material/Box";
import Slider from "@/_app/routes/layouts/ui/components/Slider";
import DeliveryConditions from "@/_app/routes/layouts/ui/components/DeliveryConditions";
import CategoriesLinks from "@/_app/routes/layouts/ui/components/CategoriesLinks";
import Typography from "@mui/material/Typography";
import styles from "@/_shared/lib/styles";

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

        <Box
          sx={{
            display: 'flex',
            padding: '25px',
            gap: '35px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              height: 114,
              width: 175,
              backgroundImage: `url('/logo_large.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Box
            sx={{
              width: '2px',
              heigth: '100%',
              backgroundColor: '#694D3f',
              opacity: 0.6
            }}
          />
          <Typography
            sx={{
              fontSize: '20px',
              color: styles.colors.text_primary,
              lineHeight: '100%',
            }}
          >
            Мы сеть предприятий общественного питания! В наш состав входят:\n
            2 столовые, пекарня, и 4 буфета. Мы готовим для вас:\n
            - Без вредных добавок
            - Только из свежих продуктов
            - Разнообразные блюда каждый день
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default MainPage