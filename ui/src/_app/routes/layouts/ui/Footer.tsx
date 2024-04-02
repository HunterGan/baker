import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginButton from "./LoginButton";
import styles from "@/_shared/lib/styles";

const mainLinks = {
  title: 'Основные:',
  links: ['Главная', 'Каталог']
}
const aboutLinks = {
  title: 'Наша компания:',
  links: ['О нас', 'Акции']
}
const contactLinks = {
  title: 'Контакты:',
  links: ['vk'],
}

const iconsMap = {
  vk: `/vk_logo.svg`,
}

const Footer: FC = () => {
  return (
    <Box 
      sx={{
        background: styles.colors.bg_light,
        width: '100%',
        padding: '30px 0 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          ...styles.adaptiveWidth,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <LinkBox options={mainLinks}/>
          <LinkBox options={aboutLinks}/>
          <LinkBox options={contactLinks} icons/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            marginTop: '40px',
            '& > a': {
              textDecoration: 'none'
            }
          }}
        >
          <Link
            href={'/'}
          >
            <Typography
              sx={{
                fontWeight: 'medium',
                fontSize: '27px',
                color: styles.colors.text_primary,
                lineHeight: '30px'
              }}
            >
              Политика конфиденциальности
            </Typography>
          </Link>
          <Typography
            sx={{
              fontWeight: 'medium',
              fontSize: '27px',
              color: styles.colors.text_primary,
              lineHeight: '30px'
            }}
          >
            |
          </Typography>
          <Link
            href={'/'}
          >
            <Typography
              sx={{
                fontWeight: 'medium',
                fontSize: '27px',
                color: styles.colors.text_primary,
                lineHeight: '30px'
              }}
            >
              Договор оферты
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

const LinkBox = ({options, icons} : {options: typeof mainLinks, icons?: true }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 50px',
        '& > a': {
          textDecoration: 'none'
        }
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '30px',
          color: styles.colors.text_primary,
          textDecoration: 'none',
        }}
      >
        {options.title}
      </Typography>
      {options.links.map((link) => (
        <Link
          key={link}
          href={'/'}
      >
        {icons
        ? 
          <Box>
            <Image
              src={iconsMap.vk || '' }
              alt={`${link} icon`}
              width={40}
              height={40}
            />
          </Box>
        :
          <Typography
            sx={{
              fontWeight: 'medium',
              fontSize: '27px',
              color: styles.colors.text_secondary,
              lineHeight: '30px'
            }}
          >
            {link}
          </Typography>
        }
      </Link>
      ))}
    </Box>
  )
}

export default Footer
