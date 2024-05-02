"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Product } from "@/entities/product";
import styles from "@/shared/lib/styles";

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

const SLIDER_INTERVAL = 10000

const ProductSlider = ({product}: {product: Product | null}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  const onNext = () => setCurrentSlide(currentSlide < data.length - 1 ? (currentSlide + 1) : 0)
  const onPrevious = () => setCurrentSlide(currentSlide > 0 ?  (currentSlide - 1) : (data.length - 1))

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId)
    }
    const timer = setTimeout(onNext, SLIDER_INTERVAL)
    setTimerId(timer)

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [currentSlide]);

  return (
    <Box
      sx={{
        height: '462px',
        width: '692px',
        position: 'relative',
      }}
    >
      {/* Slider bg image */}
      <Image
        src={data[currentSlide].image}
        alt=""
        fill={true}
      />

      {/* Arrows Left/Right*/}
      <IconButton
        onClick={onPrevious}
        sx={{
          ...arrowStyle,
          left: '30px',
          backgroundImage: `url('/arrow_left.svg')`,
        }}
      />
      <IconButton
        onClick={onNext}
        sx={{
          ...arrowStyle,
          right: '30px',
          backgroundImage: `url('/arrow_right.svg')`,
        }}
      />
    </Box>
  )
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundImage: `url('/arrow_right.svg')`,
  backgroundSize: 'cover',
  width: '40px',
  height: '40px',
  padding: 0,
  border: 'none',
  backgroundColor: styles.colors.bg_light,
}

export default ProductSlider;
