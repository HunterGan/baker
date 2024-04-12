import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/_shared/lib/styles";

const strs: string[] = [
  'Мы сеть предприятий общественного питания! В наш состав входят:',
  '2 столовые, пекарня, и 4 буфета. Мы готовим для вас',
  '- Без вредных добавок',
  '- Только из свежих продуктов',
  '- Разнообразные блюда каждый день',
]

const AboutBar: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '25px',
        gap: '35px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styles.colors.bg_light,
        marginBottom: '75px'
      }}
    >
      <Box
        sx={{
          height: 154,
          flex: '0 0 175px',
          backgroundImage: `url('/logo_large.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          width: '2px',
          height: '153px',
          backgroundColor: '#694D3F',
          opacity: 0.6
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {strs.map((str) => (
          <Typography
            key={str}
            sx={{
              fontSize: '20px',
              color: styles.colors.text_primary,
              lineHeight: '22px',
            }}
          >
            {str}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default AboutBar