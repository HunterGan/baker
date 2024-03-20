"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { FC, useState } from "react";
import LoginDialog from "./LoginDialog";

const LoginButton:FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
      >
        Login
      </Button>
      <LoginDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default LoginButton
