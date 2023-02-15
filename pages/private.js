import withAuth from "../auth/withAuth";
import { useUser } from "../auth/useUser";
import Image from "next/image";

const Private = () => {
  const { user, logout } = useUser();
  const myLoader = ({ src, width, quality }) => {
    return `https://b.fssta.com/uploads/application/nba/headshots/1120.vresize.${width}.${width}.${src}`;
  };

  return (
    <div className=" h-screen items-center">
      <div className="flex justify-end w-full text-red-600 p-3">
        <button className="" onClick={() => logout()}>
          Logout
        </button>
      </div>
      <div className=" w-full  flex items-center justify-center">
        <div className="h-1/2 w-1/2 bg-slate-300 rounded-lg flex p-2 justify-around items-center">
          <div className="">
            <div className="text-lg font-bold">Хэрэглэгчийн мэдээлэл</div>
            {user?.email && (
              <div className="text-sm font-semibold">
                <div>Имайл: {user.email}</div>
              </div>
            )}
          </div>
          <div className="bg-black w-60 h-60 rounded-full">
            <Image
              loader={myLoader}
              height={240}
              width={240}
              src="medium.98.png"
              className="rounded-full"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Private);
