import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-linear-to-r from-orange-400  to-yellow-400 h-screen">
      <div className="  flex justify-center pt-30  ">
        <div className=" flex bg-[url(https://cdn.dribbble.com/userupload/22385682/file/original-e2d5efb1660a60dd5e3445fbfafd6f28.gif)] bg-cover p-8 rounded-lg ">
          <img
            className=" w-[300px] "
            src="https://static.vecteezy.com/system/resources/previews/053/739/788/non_2x/3d-icon-happy-panda-reading-book-png.png"
          />

          <div className="flex flex-col justify-center ">
            <h1 className="text-8xl flex font-[impact]   ">WELCOME...</h1>

            <h2 className="text-4xl font-light">
              {" "}
              Your journey to achieving great things{" "}
              <span className="font-[impact] text-white bg-black p-0.5 rounded-sm">
                {" "}
                STARTS{" "}
              </span>{" "}
              from now.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home

{/* <div className='h-20 w-20 text-white border-10 rounded-full border-t-transparent animate-spin '></div> */ }
{/* <h2 className='text-4xl font-[impact]'> </h2> */ }
