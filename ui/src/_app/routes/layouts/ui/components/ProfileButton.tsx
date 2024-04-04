import { FC } from "react";
import Image from 'next/image';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "@/_shared/lib/styles";

interface ProfileButtonProps {

}

const ProfileButton: FC<ProfileButtonProps> = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'inherit',
            '& .MuiTypography-root': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Image
            src="/user_icon.svg"
            alt="User Icon"
            width={41}
            height={41}
          />
          <Typography
            sx={{
              fontWeight: 'semi-bold',
              fontSize: '27px',
              color: styles.colors.text_primary,
              textDecoration: 'none'
            }}
          >
             Войти
          </Typography>
        </Box>
      </Button>
    </Box>
 );
};

export default ProfileButton