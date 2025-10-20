import React from 'react'

const SearchBar = ({logo, searchInput, setSearchInput, getdata, setIndex}) => {
  return (
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
  )
}

export default SearchBar