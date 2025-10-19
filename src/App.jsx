import React, { useEffect, useState } from "react";
import logo from "../public/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { RiLayout2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import axios from "axios";

const App = () => {
  const [fetchdata, setFetchData] = useState([]);
  const [index, setIndex] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    try {
      const url = searchInput
        ? `https://api.unsplash.com/search/photos?query=${searchInput}&client_id=7aNcVS1k9uxuk1yFn-c8B-zvY8xbQewtOZB57OJNKa8&per_page=12&page=${index}`
        : `https://api.unsplash.com/photos/random?client_id=7aNcVS1k9uxuk1yFn-c8B-zvY8xbQewtOZB57OJNKa8&per_page=12&page=${index}`;

      const { data } = await axios.get(url);
      setFetchData(searchInput ? data.results : data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setFetchData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, [index]);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-[5%] bg-white h-full border-r-2 border-gray-300 flex-col items-center justify-between py-4">
        <div>
          <img src={logo} alt="logo" className="h-10 w-10 my-5" />
        </div>

        <div className="flex flex-col gap-10 text-2xl text-gray-700">
          <AiFillHome className="cursor-pointer hover:text-black transition" />
          <MdExplore className="cursor-pointer hover:text-black transition" />
          <FaSquarePlus className="cursor-pointer hover:text-black transition" />
          <RiLayout2Fill className="cursor-pointer hover:text-black transition" />
          <IoMdNotifications className="cursor-pointer hover:text-black transition" />
        </div>

        <div className="text-2xl text-gray-700 mb-4">
          <IoSettings className="cursor-pointer hover:text-black transition" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 h-full p-3 overflow-y-auto flex flex-col md:flex-col pb-20 md:pb-0">
        {/* Search Input */}
        <div className="mb-4 flex items-center justify-center w-full">
          {/* Logo */}
          <img src={logo} alt="logo" className="sm:hidden h-10 w-10 mr-4" />

          {/* Search input */}
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIndex(1);
                getdata();
              }
            }}
            className="flex-1 p-2 border bg-gray-100 border-gray-400 rounded-md focus:outline-none"
            placeholder="🔍︎ Search For Images And Press Enter !"
          />
        </div>

        {/* Loading */}
        {loading && <div className="text-center my-4">Loading...</div>}

        {/* Images */}
        {fetchdata.length > 0 ? (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 p-1">
            {fetchdata.map((items, idx) => (
              <div key={idx} className="mb-4 break-inside-avoid">
                <img
                  src={items.urls.small}
                  alt={items.alt_description}
                  className="w-full rounded-lg shadow-md hover:opacity-90 transition"
                />
              </div>
            ))}
          </div>
        ) : !loading ? (
          <div className="text-center text-gray-500 mt-10">
            No images found.
          </div>
        ) : null}

        {/* Pagination */}
        {fetchdata.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => index > 1 && setIndex(index - 1)}
              className="bg-red-500 px-6 py-2 text-white rounded-md flex items-center gap-1"
            >
              <GrFormPrevious />
            </button>
            <span className="text-black font-bold text-lg">{index}</span>
            <button
              onClick={() => setIndex(index + 1)}
              className="bg-red-500 px-6 py-2 text-white rounded-md flex items-center gap-1"
            >
              <GrFormNext />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-300 flex justify-around items-center py-2 text-2xl text-gray-700 md:hidden">
        <AiFillHome className="cursor-pointer hover:text-black transition" />
        <FaSquarePlus className="cursor-pointer hover:text-black transition" />
        <IoMdNotifications className="cursor-pointer hover:text-black transition" />
        <IoSettings className="cursor-pointer hover:text-black transition" />
      </div>
    </div>
  );
};

export default App;
