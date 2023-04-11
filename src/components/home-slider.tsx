import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      sx={{
        ...style,
        m: 4,
        display: "block",
        backgroundColor: "red !important",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <ArrowLeftIcon />
    </IconButton>
  );
}

const images = [
  "https://media.istockphoto.com/id/495799500/photo/good-food-and-laughter-go-hand-in-hand.jpg?s=612x612&w=0&k=20&c=b5NzRzCcGfa42duoo99ITIOfK8Z9aHaiomKKNiXxSAg=",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
];

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      sx={{
        ...style,
        m: 4,
        display: "block",
        backgroundColor: "red !important",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <ArrowRightIcon />
    </IconButton>
  );
}

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Stack spacing={4}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <div className="block mx-5 mt-6 h-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={image} style={{ borderRadius: "10px" }} />
            </div>
          </Box>
        ))}
      </Slider>
    </Stack>
  );
};

export default SliderComponent;
