import { NextRequest, NextResponse } from "next/server";

const baseUrl = 'catalog'

const categories = [
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
    href: `${baseUrl}/combo`
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


// FETCH ALL CATEGORIES
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  
  const category = searchParams.get("category");

  try {
    if (category) {
      return new NextResponse(JSON.stringify(category), { status: 200 });
    }
    
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
