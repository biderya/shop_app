import Image from "next/image";
import react from "react";
import Slider from "../components/slider/slider";

function Gallery() {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <Slider />
      </div>

      <div className="h-1/2 object-cover overflow-hidden">
        <Image
          src={"/assets/images/floor.jpg"}
          objectFit={"cover"}
          width={2000}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
}

export default Gallery;
