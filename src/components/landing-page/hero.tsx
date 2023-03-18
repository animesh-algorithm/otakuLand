import Link from "next/link";
import { ImSearch } from "react-icons/im";
import { BsArrowUpRightSquare } from "react-icons/bs";

interface Props {
  trendingAnimesNames: any;
}

const Hero = ({ trendingAnimesNames }: Props) => {
  return (
    <section id="hero">
      <div className="flex flex-col items-center h-screen text-center text-white justify-top bg-gradient-to-br from-white to-gray-500 dark:bg-gradient-to-br dark:from-black dark:to-gray-800">
        <h1 className="mt-10 text-4xl font-bold tracking-widest text-black uppercase text-shadow dark:text-white">
          Welcome to Otaku Land
        </h1>
        {/* Search Input */}
        <div className="flex items-center justify-center w-full mt-10">
          <input
            type="text"
            className="px-5 py-3 text-black bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 sm:w-3/4 md:w-2/4 "
            placeholder="Search for anime"
          />
          <ImSearch
            className="w-10 h-10 p-2 ml-2 text-white rounded-full cursor-pointer"
            aria-hidden="true"
          />
        </div>
        {/* Trending */}
        <article
          id="trending"
          className="flex flex-col items-start justify-start w-3/4 p-2 mt-5 text-left md:w-2/4"
        >
          <div className="text-black dark:text-white">
            <b>Trending:</b> {trendingAnimesNames.join(", ")}
          </div>
        </article>
        {/* View Full Site */}
        <div className="flex items-center justify-center w-[75%] p-3 m-12 sm:m-12 md:m-[100px] text-xl text-black rounded-b-full cursor-pointer dark:text-white bg-gradient-to-r from-white to-gray-500 hover:from-gray-500 hover:to-white dark:bg-gradient-to-r dark:from-black dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-black">
          View Full Site
          <BsArrowUpRightSquare className="w-6 h-6 ml-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
