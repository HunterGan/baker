'use client'

import { Typography } from "@mui/material"
import Link from "next/link"
import { FC, ReactNode } from "react"
import styles from "@/_shared/lib/styles";
import { usePathname } from "next/navigation";

interface IStyledLink {
  href: string
  children: ReactNode
  fw?: string
  color?: 'primary' | 'secondary'
  size?: 'md' | 'sm'

}

const StyledLink:FC<IStyledLink> = ({
  color = 'primary',
  size = 'md',
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
        fontWeight: 500,
        fontSize: size === 'md' ? '27px' : '25px',
        color: (color === 'primary' || isCurrentPath) ? styles.colors.text_primary : styles.colors.text_secondary,
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
