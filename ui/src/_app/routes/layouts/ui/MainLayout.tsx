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
import { css } from '@emotion/react';
import Image from "next/image";

interface IMainLayout {
 children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
 return (
    <Box sx={wrapperStyles}>

      {/* BG images */}
      <Box sx={{...bottomLayerStyles}}>
        <Box sx={imageContainerStyles}>
          <Box sx={imageWrapperStyles} style={{ backgroundImage: `url('/bg_picture_left.jpg')` }} />
          <Box sx={imageWrapperStyles} style={{ backgroundImage: `url('/bg_picture_left.jpg')` }} />
        </Box>
      </Box>

      {/* Document */}
      <Box
        sx={{
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1
          }}
        >
          <Box sx={{...styles.adaptiveWidth}}>
            {children}
          </Box>
        </Box>

        <Footer />

      </Box>
    </Box>
 );
};

const wrapperStyles = {
 margin: 0,
 padding: 0,
 boxSizing: 'border-box',
 width: '100%',
 minHeight: '100vh',
 display: 'flex',
 flexDirection: 'column',
 backgroundColor: styles.colors.bg_main,
 position: 'relative',
 zIndex: 1,
 overflow: 'hidden'
};

const bottomLayerStyles = {
 position: 'absolute',
 bottom: 0,
 left: 0,
 width: '100%',
 height: '100%',
 backgroundColor: 'none',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 zIndex: 10,
};

const imageContainerStyles = {
 display: 'flex',
 justifyContent: 'space-between',
 width: '100%',
 height: '100%',
};

const imageWrapperStyles = {
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 backgroundRepeat: 'repeat-y',
 height: '2000px',
 width: '600px',

};

export default MainLayout;