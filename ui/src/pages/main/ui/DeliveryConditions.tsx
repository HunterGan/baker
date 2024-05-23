import { FC } from "react";
import Box from "@mui/material/Box";
import styles from "@/shared/lib/styles";
import { Typography } from "@mui/material";

const conditions = [
  {
    icon: '/delivery1.svg',
    title: 'До 60 мин.',
    subtitle: 'Время доставки',
  },
  {
    icon: '/delivery2.svg',
    title: '600 ₽.',
    subtitle: 'Мин.сумма заказа',
  },
  {
    icon: '/delivery3.svg',
    title: 'Бесплатно',
    subtitle: 'Стоимость доставки',
  }
]

const DeliveryConditions: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
        height: '77px',
        width: '100%',
        borderRadius: '7px',
        backgroundColor: styles.colors.bg_light,
      }}
    >
      {conditions.map(({icon, title, subtitle}) => (
        <Box
          key={title}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Box
            sx={{
              height: 34,
              width: 34,
              backgroundImage: `url('${icon}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '18px',
                color: styles.colors.text_primary,
                textDecoration: 'none'
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '15px',
                color: styles.colors.text_secondary,
                textDecoration: 'none'
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default DeliveryConditions