"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide_1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide_2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide_1.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '450px',
        margin: '45px 0 40px',
        position: 'relative',
      }}
    >
      <Image
        src={data[currentSlide].image}
        alt=""
        width={1078}
        height={450}
      />
      <Box
        sx={{
          position: 'absolute',
        }}
      >

      </Box>
    </Box>
  )
};

export default Slider;
