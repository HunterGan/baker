'use client'

import { FC, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography"
import styles from "@/shared/lib/styles";

interface IStyledLink {
  href: string
  children: ReactNode
  fw?: string
  color?: 'primary' | 'secondary' | 'white'
  size?: 'md' | 'sm' | 'xs'
}

const sizes = {
  xs: '18px',
  sm: '25px',
  md: '27px'
}


const StyledLink:FC<IStyledLink> = ({
  color = 'primary',
  size = 'md',
  fw=500,
  href,
  children
}) => {
  const pathname = usePathname()

  const isCurrentPath = href === pathname
  return (
    <Link
      href={href}
  >
    <Typography
      sx={{
        fontWeight: fw,
        fontSize: sizes[size],
        color: isCurrentPath ? styles.colors.text_primary : styles.colors[`text_${color}`],
        lineHeight: '30px',
        textShadow: 'rgb(0, 0, 0, 15%) 2px 2px 2px',

        ':hover': {
          color: color === 'primary' ? '#492A19' : '#554841'
        }
      }}
    >
      {children}
    </Typography>
  </Link>
  )
}

export default StyledLink
