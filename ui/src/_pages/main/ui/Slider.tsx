"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

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

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  const onNext = () => setCurrentSlide(currentSlide < data.length - 1 ? (currentSlide + 1) : 0)
  const onPrevious = () => setCurrentSlide(currentSlide > 0 ?  (currentSlide - 1) : (data.length - 1))
  const onCustomSlide = (slide: number) => setCurrentSlide(slide)

  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId)
    }
    const timer = setTimeout(onNext, SLIDER_INTERVAL)
    setTimerId(timer)

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Box
      sx={{
        height: '450px',
        margin: '45px 0 40px',
        position: 'relative',
      }}
    >
      {/* Slider bg image */}
      <Image
        src={data[currentSlide].image}
        alt=""
        width={1078}
        height={450}
      />

      {/* Arrows Left/Right*/}
      <IconButton
        onClick={onPrevious}
        sx={{
          ...arrowStyle,
          left: '-80px',
          backgroundImage: `url('/arrow_left.svg')`,
        }}
      />
      <IconButton
        onClick={onNext}
        sx={{
          ...arrowStyle,
          right: '-80px',
          backgroundImage: `url('/arrow_right.svg')`,
        }}
      />

      {/* Set custom image - bottom points */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 20,
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {data.map((_, ind) => (
          <IconButton
            key={ind}
            onClick={() => onCustomSlide(ind)}
            sx={{
              height: '22px',
              width: '22px',
              backgroundImage: `url('/slider_point_${ind === currentSlide ? 'checked' : 'unchecked'}.svg')`,
              backgroundSize: 'cover',
            }}
          />
        ))}
      </Box>
    </Box>
  )
};

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundImage: `url('/arrow_right.svg')`,
  backgroundSize: 'cover',
  width: '50px',
  height: '50px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
}

export default Slider;
