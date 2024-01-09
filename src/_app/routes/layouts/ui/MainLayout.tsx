import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface IMainLayout {
  children: ReactNode
}

const MainLayout:FC<IMainLayout> = ({children}) => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        width: '100%',
        heigth: '100vh',
        background: 'black'
      }}
    >
      {children}
    </Box>
  )
}

export default MainLayout
