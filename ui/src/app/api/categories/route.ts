import { NextResponse } from "next/server";

const baseUrl = 'categories'

const categories = [
  {
    name: 'Популярное',
    href: `${baseUrl}/popular`
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
    href: 'garnish'
  },
  {
    name: 'Выпечка',
    href: 'bakery'
  },
  {
    name: 'Соусы',
    href: 'sauce'
  },
  {
    name: 'Напитки',
    href: 'drinks'
  },
  {
    name: 'Десерты',
    href: 'dishes'
  },
]


// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};