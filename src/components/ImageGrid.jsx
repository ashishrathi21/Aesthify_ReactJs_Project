import React from "react";

const ImageGrid = ({ fetchdata }) => {
  return (
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
  );
};

export default ImageGrid;
