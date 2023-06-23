import React, { useState } from "react";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [search , setSearch] = useState('')

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <i
        className="fa-solid fa-search cursor-pointer text-xl hover:text-black duration-200 mr-4"
        onClick={toggleSearch}
      ></i>
      <div
        className={`bg-slate-100 fixed h-full bottom-0 left-0 top-0 right-0 duration-500 ease-in-out overflow-hidden ${
          isSearchOpen ? "max-h-0" : "max-h-screen"
        }`}
      >
        <div className="max-h-full overflow-auto px-6 py-4 flex w-full items-center max-w-3xl mx-auto">
          <i
            className="fa-solid fa-xmark cursor-pointer text-xl hover:text-black duration-200 mr-4"
            onClick={toggleSearch}
          ></i>
          <div className={`w-full flex items-start border-b-2 border-slate-400 focus-within:border-2 px-2 py-1 focus-within:rounded-md duration-100 ease-in-out ${search !== '' ? 'border-2 rounded-md' : ''}`}>
            <input
              type="search"
              name="search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              id="search"
              className="w-full py-1 text-lg bg-transparent outline-none px-4 text-slate-500"
              placeholder="Search"
            />
            <i className="fa-solid fa-search cursor-pointer text-xl hover:text-black duration-200 mt-1  mx-2"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
