import { Product } from "@/_entities/product";
import { NextRequest, NextResponse } from "next/server";

const products: Product[] = [
  {
    id: '1',
    category: 'bakery',
    title: 'Хлеб ржаной',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: './paella.jpg',
    price: 70,
    available: true,

  },
  {
    id: '2',
    category: 'bakery',
    title: 'Cake',
    description: 'Very tasty cake',
    img: './paella.jpg',
    price: 100,
    available: true,

  },
  {
    id: '3',
    category: 'bakery',
    title: 'Cake',
    description: 'Very tasty cake',
    img: './paella.jpg',
    price: 100,
    available: true,

  },
  {
    id: '4',
    category: 'bakery',
    title: 'Cake',
    description: 'Very tasty cake',
    img: './paella.jpg',
    price: 100,
    available: true,

  },
  {
    id: '5',
    category: 'bakery',
    title: 'Cake',
    description: 'Very tasty cake',
    img: './paella.jpg',
    price: 100,
    available: true,

  },
]


export const GET = async (req: NextRequest) => {  
  try {
    if (products) {
      return new NextResponse(JSON.stringify(products), { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
