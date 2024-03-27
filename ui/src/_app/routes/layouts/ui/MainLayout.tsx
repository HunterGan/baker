import { FC, ReactNode } from "react";
import Box from '@mui/material/Box';
import Header from "./Header";
import styles from "@/_shared/lib/styles"; 
import Footer from "./Footer";
import Pic from '@/../public/bg_picture_left.png'

interface IMainLayout {
 children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
 return (
    <Box sx={{...wrapperStyles}}>
      {/* BG images */}
      <Box sx={{...bottomLayerStyles}}>
        <Box sx={imageContainerStyles}>
          <Box sx={imageWrapperStyles} style={{ backgroundImage: `url('bg_picture_left.png')` }} />
          <Box sx={imageWrapperStyles} style={{ backgroundImage: `url('/bg_picture_left.jpg')` }} />
        </Box>
      </Box>

      {/* Document */}
      <Box
        sx={{
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center', 
            flexGrow: 1,
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
 width: '100vw',
 minHeight: '100vh',
 display: 'flex',
 flexDirection: 'column',
 backgroundColor: '#B9ACA2',
 position: 'relative',
 zIndex: 1,
 overflow: 'hidden',
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
 backgroundColor: 'inherit',
 '@media (min-width: 2200px)': {'& > :last-child': {display: 'none'}}
};

const imageWrapperStyles = {
 backgroundSize: 'auto',
 backgroundPosition: 'center',
 backgroundRepeat: 'repeat-y',
 height: '2000px',
 width: '600px',
'@media (min-width: 2200px)': {
  width: '100%',
  backgroundRepeat: 'repeat',
},
};

export default MainLayout;