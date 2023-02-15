import Image from "next/image";

const Home = () => {
  console.log(
    "process.env.NEXT_PUBLIC_FIREBASE_API_KEY=",
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  );
  return (
    <div className="">
      {/* <div className="flex flex-col items-center "></div> */}
    </div>
  );
};

export default Home;
