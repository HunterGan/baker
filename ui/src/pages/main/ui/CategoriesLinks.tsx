import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CategoryLink } from "@/entities/product";
import styles from "@/shared/lib/styles";

const CategoriesLinks = ({links}: {links: CategoryLink[]}) => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        margin: '32px 0',
        padding: '0 40px',
      }}
    >
     {links.map((link, ind) => (
      <Link
        key={link.name || ind}
        href={link.href}
        style={{textDecorationLine: 'none'}}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            
            color: styles.colors.text_white,
            lineHeight: '30px',
            textShadow: 'rgb(0, 0, 0, 15%) 2px 2px 2px',

            ':hover': {
              color: styles.colors.hover.text_white,
            }
          }}
        >
          {link.name}
        </Typography>
      </Link>
     ))}
    </Box>
  )
}

export default CategoriesLinks
