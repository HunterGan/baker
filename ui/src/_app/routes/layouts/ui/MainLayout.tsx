import { FC, ReactNode } from "react";
import Box from '@mui/material/Box';
import Header from "./Header";
import styles from "@/_shared/lib/styles"; 
import Footer from "./Footer";
import bgimage from '@/../public/bg_picture_left.png'

interface IMainLayout {
 children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
 return (
    <Box sx={{...wrapperStyles,
      backgroundImage: `url(${bgimage.src}), url(${bgimage.src})`,
      backgroundPosition: 'left top, right top',
      backgroundRepeat: 'repeat-y',
      '@media (min-width: 2200px)': {
        backgroundImage: `url(${bgimage.src})`,
        backgroundRepeat: 'repeat',
      },
    }}>

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
 backgroundColor: 'rgba(185, 172, 162, 0.8)',
 position: 'relative',
 zIndex: 1,
 overflow: 'hidden',
};

export default MainLayout;