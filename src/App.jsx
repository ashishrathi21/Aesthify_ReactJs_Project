import React, { useEffect, useState } from "react";
import logo from "../public/Logo.png";
import axios from "axios";

// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import BottomNav from "./components/BottomNav";
import ImageGrid from "./components/ImageGrid";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

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
        : `https://api.unsplash.com/photos?client_id=7aNcVS1k9uxuk1yFn-c8B-zvY8xbQewtOZB57OJNKa8&per_page=12&page=${index}`;

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
      <SideBar logo={logo} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 h-full p-3 overflow-y-auto flex flex-col md:flex-col pb-20 md:pb-0">
        {/* SearchBar */}
        <SearchBar
          logo={logo}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          getdata={getdata}
          setIndex={setIndex}
        />

        {/* Loading */}
        {loading && <Loader />}

        {/* Image Grid */}
        {fetchdata.length > 0 ? (
          <ImageGrid fetchdata={fetchdata} />
        ) : !loading ? (
          <EmptyState />
        ) : null}

        {/* Pagination */}
        {fetchdata.length > 0 && <Pagination index={index} setIndex={setIndex} />}
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default App;
