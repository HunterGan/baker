import { FC, ReactNode } from "react";
import Box from '@mui/material/Box';
import Header from "./Header";
import Footer from "./Footer";
import bgimage from '@/../public/bg_picture_left.png'
import styles from "@/_shared/lib/styles"; 

interface IMainLayout {
 children: ReactNode
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
 return (
    <Box sx={wrapperStyles}>
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
          <Box sx={styles.adaptiveWidth}>
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

 backgroundColor: 'rgba(185, 172, 162, 1)',
 backgroundImage: `url(${bgimage.src}), url(${bgimage.src})`,
 backgroundPosition: 'left top, right top',
 backgroundBlendMode: 'color-burn',
 backgroundRepeat: 'repeat-y',

 position: 'relative',
 zIndex: 1,
 overflow: 'hidden',

 '@media (min-width: 2200px)': {
   backgroundImage: `url(${bgimage.src})`,
   backgroundRepeat: 'repeat',
 },
};

export default MainLayout;