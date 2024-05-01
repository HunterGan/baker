import { NextResponse } from "next/server";

const baseUrl = 'catalog'

const categoriesLinks = [
  {
    name: 'Популярное',
    href: `${baseUrl}`
  },
  {
    name: '2-е блюда',
    href: `${baseUrl}/second`
  },
  {
    name: 'Салаты',
    href: `${baseUrl}/salads`
  },
  {
    name: 'Супы',
    href: `${baseUrl}/soups`
  },
  {
    name: 'Комбо-наборы',
    href: `${baseUrl}/combos`
  },
  {
    name: 'Гарниры',
    href: `${baseUrl}/garnish`
  },
  {
    name: 'Выпечка',
    href: `${baseUrl}/bakery`
  },
  {
    name: 'Соусы',
    href: `${baseUrl}/sauce`
  },
  {
    name: 'Напитки',
    href: `${baseUrl}/drinks`
  },
  {
    name: 'Десерты',
    href: `${baseUrl}/dishes`
  },
]

export const GET = async () => {  
  try {
    if (categoriesLinks) {
      return new NextResponse(JSON.stringify(categoriesLinks), { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};