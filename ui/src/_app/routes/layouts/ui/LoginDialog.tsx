"use client";

import React, { FC, useState } from "react";
import { IMaskInput } from "react-imask";
import Link from "next/link";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ILoginDialog {
  open: boolean
  onClose: () => void
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const pattern = /\(9\d{2}\) \d{3}-\d{2}-\d{2}/;

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00\) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
        title=""
      />
    );
  },
);

const LoginDialog:FC<ILoginDialog> = ({open, onClose}) => {
  const [phone, setPhone] = useState({
    textmask: '(9  )     -   -   ',
    isValid: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone({
      textmask: event.target.value,
      isValid: pattern.test(event.target.value),
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          padding: '16px',
          borderRadius: 4,
        }
      }}
    >
      <DialogTitle>
        Вход на сайт
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your phone here. We
          will send updates occasionally.
        </DialogContentText>

        <FormControl
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '16px',
            'input': {
              '&& .MuiInput-underline::before': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color
              },
              '&& .MuiInput-underline::after': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color
              },
              '.MuiInput-underline:hover::before': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color on hover
              },
              '.MuiInput-underline:hover::after': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color on hover
              },
              '.MuiInput-underline.Mui-focused::before': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color when focused
              },
              '.MuiInput-underline.Mui-focused::after': {
                borderBottomColor: phone.isValid ? 'green' : 'red' + ' !important', // Replace with your desired color when focused
              },
            }
          }}
        >
          <Input
            startAdornment={"+7"}
            value={phone.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom as any}
            size="medium"
            sx={{
              textAlign: 'center',
              fontSize:  28,
              maxWidth:  240,
              // Redefine the underline color
  
            }}
          />
        </FormControl>
        <DialogActions
        sx={{
          marginTop: '24px'
        }}
      >
        <Button
          type="submit"
          onClick={() => console.log(phone.textmask)}
          disabled={!phone.isValid}
          variant="contained"
          size="large"
          fullWidth
        >
          Отправить код
        </Button>
      </DialogActions>
      <DialogContentText
        sx={{
          marginTop: '8px',
          fontSize: 10
        }}
      >
        Продолжая, вы соглашаетесь
        <Link href={'#'}> со сбором и обработкой персональных данных и пользовательским соглашением</Link>
      </DialogContentText>
      </DialogContent>
     
    </Dialog>
  )
}

export default LoginDialog
