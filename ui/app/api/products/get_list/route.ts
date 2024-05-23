import { Product } from "@/entities/product";
import { NextRequest, NextResponse } from "next/server";

const additions: Product[] = [
  {
    type: 'addition',
    id: '11',
    title: 'Sausage',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: '/paella.jpg',
    price: 70,
    available: true,
  },
  {
    type: 'addition',
    id: '12',
    title: 'Masic',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: '/paella.jpg',
    price: 30,
    available: true,
  },
  {
    type: 'addition',
    id: '13',
    title: 'Kozikaki',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: '/paella.jpg',
    price: 30,
    available: true,
  },
  {
    type: 'addition',
    id: '14',
    title: 'Lepeshka Korov',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: '/paella.jpg',
    price: 30,
    available: true,
  },
]

const products: Product[] = [
  {
    type: 'bakery',
    id: '1',
    title: 'Хлеб ржаной with long name to check layout',
    description: 'Служит источником углеводов и является основным компонентом многих блюд',
    img: '/paella.jpg',
    price: 70,
    available: true,
    additions: additions
  },
  {
    type: 'bakery',
    id: '2',
    title: 'Cake',
    description: 'Very tasty cake',
    img: '/paella.jpg',
    price: 100,
    available: true,
    additions: additions
  },
  {
    type: 'bakery',
    id: '3',
    title: 'Cake',
    description: 'Very tasty cake',
    img: '/paella.jpg',
    price: 100,
    available: true,
    additions: additions
  },
  {
    type: 'bakery',
    id: '4',
    title: 'Cake',
    description: 'Very tasty cake',
    img: '/paella.jpg',
    price: 100,
    available: true,
    additions: additions
  },
  {
    type: 'bakery',
    id: '5',
    title: 'Cake',
    description: 'Very tasty cake',
    img: '/paella.jpg',
    price: 100,
    available: true,
    additions: additions
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
