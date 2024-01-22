import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Herobanner = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      navigate(`/search/${keyword}`);
    }
  };

  const hadnleSearchClick = () => {
    navigate(`/search/${keyword}`);
  };

  return (
    <div className="bg-[#05142d] h-[700px]  w-full  bg-hero-pattern flex items-center justify-center">
      <div className="w-full max-w-[1200px] my-0 mx-auto py-0 px-4">
        <div className="flex flex-col items-center text-center max-w-[800px] my-0 mx-auto">
          <span className="text-white lg:text-7xl text-xl lg:mb-0 mb-4	font-bold">
            HOŞGELDİNİZ
          </span>
          <span className="text-white lg:text-2xl  text-sm font-medium	mb-10">
            Milyonlarca film, TV şovu ve keşfedilecek insan. Şimdi keşfet.
          </span>
          <div className="flex items-center justify-center w-full">
            <input
              onKeyDown={searchFunc}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Bir film veya TV şovu ara..."
              className="lg:h-[60px] h-10 placeholder:text-sm  w-[300px] lg:w-full lg:placeholder:text-2xl py-0 px-6 input-radius bg-white outline-none border-none rounded-3xl	    	"
              type="text"
            />
            <button
              onClick={hadnleSearchClick}
              className="w-[100px] lg:w-[150px] lg:h-[60px] h-10 text-xl text-white outline-none rounded-3xl button-cover"
            >
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
