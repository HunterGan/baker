import { FC } from "react";
// import axios from "axios";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import routes from '@/_app/routes'
// import StyledLink from "@/_shared/ui/common/StyledLink";

// async function getCategories() {
//   try {
//     const categories = await axios.get(routes.categories.get_categories)
//     return categories.data
//   }
//   catch (e) {
//     throw new Error('dd')
//   }
// }



const CategoriesLinks = () => {
  const links = [
    {
      name: '1',
      href: '1'
    },
    {
      name: '2',
      href: '2'
    }
  ]
  // const links: any[] = await getCategories()
  // console.log('LINKS ARE: ', links)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        margin: '32px 0'
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
            fontWeight: 'semi-bold',
            fontSize: '18px',
            
            color: '#F4ECE2',
            lineHeight: '30px',
            textShadow: 'rgb(0, 0, 0, 15%) 2px 2px 2px',

            ':hover': {
              color: '#00aaa'
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