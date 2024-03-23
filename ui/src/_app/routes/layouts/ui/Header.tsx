import { FC, ReactNode } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import componentStyles from "@/_shared/lib/styles";
import LoginButton from "./LoginButton";
import styles from "@/_shared/lib/styles";
import Link from "next/link";
import CartButton from "./components/CartButton";

interface IHeaderLink {
  title: string
  href: string
}

const headerLinks:IHeaderLink[]  = [
  {
    title: 'Главная',
    href: '/'
  },
  {
    title: 'Акции',
    href: '/'
  },
  {
    title: 'О нас',
    href: '/'
  }
]

const Header = () => {
  return (
    <Box 
      sx={{
        background: styles.colors.bg_light,
        width: '100%',
        height: '75px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          ...componentStyles.adaptiveWidth,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo box */}
        <Box>
          <Link href="/"> {/* Wrap Avatar with Link for navigation */}
            <Avatar
              variant="square"
              alt="Logo"
              src="/logo_header2.svg"
              sx={{ cursor: 'pointer', height: '65px', width: 'auto' }} /> {/* Display the logo */}
          </Link>
        </Box>

        {/* Links box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            '& > a': {
              textDecoration: 'none'
            }
          }}
        >
          {headerLinks.map(({href, title}) => (
            <Link
              key={title}
              href={href}
            >
              <Typography
                sx={{
                  fontWeight: 'semi-bold',
                  fontSize: '27px',
                  color: styles.colors.text_secondary,
                  lineHeight: '30px'
                }}
              >
                {title}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Header settings box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <CartButton
            cartLength={Math.round(Math.random() * 10)}
          />

        </Box>
      </Box>
    </Box>
  )
}
// const CartButton: FC<CartButtonProps> = ({ cartLength }) => {
//   return (
//      <IconButton>
//        <Badge
//          badgeContent={cartLength}
//          color="secondary"
//          overlap="circular"
//          anchorOrigin={{
//            vertical: "bottom",
//            horizontal: "right",
//          }}
//        >
//          <ShoppingCartIcon />
//        </Badge>
//      </IconButton>
//   );
//  };

export default Header
