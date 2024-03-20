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
import styled from "@emotion/styled";
import Header from "./Header";
import styles from "@/_shared/lib/styles"; 
import Footer from "./Footer";


interface IMainLayout {
  children: ReactNode
}

const MainLayout:FC<IMainLayout> = ({children}) => {
  return (
    <Box sx={wrapperStyles}>
      <Header/>
      {/* Main */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          background: 'white',
          flexGrow: 1
        }}
      >
        <Box
          sx={{
            ...styles.adaptiveWidth,
            background: 'black',
          }}
        >
          {children}
        </Box>
      </Box>
      {/* Footer */}
      <Footer/>
    </Box>
  )
}

const wrapperStyles = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: styles.colors.bg_main,
}

export default MainLayout
