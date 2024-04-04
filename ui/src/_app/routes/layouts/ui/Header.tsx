import { FC } from 'react';
import Link from "next/link";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import styles from "@/_shared/lib/styles";
import StyledLink from "@/_shared/ui/common/StyledLink";
import CartButton from "./components/CartButton";
import ProfileButton from "./components/ProfileButton";

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
    href: '/actions'
  },
  {
    title: 'О нас',
    href: '/about'
  }
]

const Header: FC = () => {
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
          ...styles.adaptiveWidth,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo box */}
        <Box>
          <Link href="/"> 
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
            <StyledLink
              key={href}
              href={href}
              color="secondary"
            >
              {title}
            </StyledLink>
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
          <ProfileButton/>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
