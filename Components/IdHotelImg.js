import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const IdHotelImg = (photos) => {
  // const images = [photos]
  return (
    <Carousel className="  px-40 my-4 ">
      {photos?.photos?.map((img, index) => (
        <img key={index}  className="rounded-md h-[600px]" src={img} />
      ))}
    </Carousel>
  );
};

export default IdHotelImg;
