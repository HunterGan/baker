'use client'

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import styles from "@/shared/lib/styles";
// import MinusIcon from '@/../public/minus_icon.svg'
// import PlusIcon from '@/../public/plus_icon.svg'

interface CountButtonProps {
  size?: 'sm' | 'md'
  onChange: (value: number) => void
  current?: number
}

const config = {
  md: {
    sizePx: '32px',
    paddingPx: '5px',
    lineWidthPx: '3px',
    fzWidthPx: '25px',
    fw: 600,
  },
  sm: {
    sizePx: '22px',
    paddingPx: '4px',
    lineWidthPx: '2px',
    fzWidthPx: '20px',
    fw: 500,
  }
}
// SVG for minus icon

const CountField: FC<CountButtonProps> = ({
  size = 'md',
  onChange,
  current = 0,
}) => {
  const {
    fw,
    fzWidthPx,
    lineWidthPx,
    paddingPx,
    sizePx
  } = config[size]

  const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ECECEC" strokeWidth={lineWidthPx} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
    </svg>
  );
  

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ECECEC" strokeWidth={lineWidthPx} strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
    </svg>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flex: '0 0 auto',
      }}
    >
      <IconButton
        onClick={() => onChange(current - 1)}
        sx={{
          width: sizePx,
          height: sizePx,
          padding: paddingPx,
          backgroundColor: '#A4938A',
          borderRadius: '5px'
        }}
      >
        <MinusIcon/>
      </IconButton>
      <Typography sx={{fontSize: fzWidthPx, color: styles.colors.text_primary, fontWeight: fw, lineHeight: '24px'}}>{current}</Typography>
      <IconButton
        onClick={() => onChange(current + 1)}
        
        sx={{
          width: sizePx,
          height: sizePx,
          padding: paddingPx,
          backgroundColor: '#A4938A',
          borderRadius: '5px'
        }}
      >
        <PlusIcon/>
      </IconButton>
    </Box>
  )
}

export default CountField
