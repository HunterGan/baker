import { Button as ButtonMui, ButtonProps, styled } from "@mui/material";
import { FC, ReactNode } from "react";

interface IButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text'
  children: ReactNode
}

const Button:FC<IButtonProps> = ({variant, children, ...props}) => {
  return (
    <ButtonMui>
      {children}
    </ButtonMui>
  )
}