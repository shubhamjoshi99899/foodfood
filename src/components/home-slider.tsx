import { Box, IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  "https://media.istockphoto.com/id/495799500/photo/good-food-and-laughter-go-hand-in-hand.jpg?s=612x612&w=0&k=20&c=b5NzRzCcGfa42duoo99ITIOfK8Z9aHaiomKKNiXxSAg=",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
];

interface ButtonProps {
  onClick: any;
}

const HomeSlider = () => {
  return (
    <Carousel responsive={responsive}>
      {images.map((image, index) => (
        <Box key={index}>
          <div className="block mx-5 mt-6 h-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={image} style={{ borderRadius: "10px" }} />
          </div>
        </Box>
      ))}
    </Carousel>
  );
};

export default HomeSlider;
