import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../listedBooks/ReadList";
import Wishlist from "../../listedBooks/Wishlist";

const Books = () => {
  const { storedBooks, storeWishlist } = useContext(BookContext);

  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <div className="bg-base-200 py-6 text-center rounded-xl">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      <div className="flex justify-center">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn btn-primary px-8 rounded-lg font-bold">
            Sort by : <span className="capitalize">{sortingType || "Select"}</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[10] mt-2 border border-base-200"
          >
            <li
              onClick={() => {
                setSortingType("pages");
              }}
            >
              <a className="font-bold">Pages Count</a>
            </li>
            <li
              onClick={() => {
                setSortingType("ratings");
              }}
            >
              <a className="font-bold">Ratings</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs>
          <TabList className="flex gap-6 border-b border-base-300 mb-8">
            <Tab className="pb-3 px-1 font-bold cursor-pointer transition-all border-b-2 border-transparent outline-none [&.react-tabs__tab--selected]:border-primary [&.react-tabs__tab--selected]:text-primary" selectedClassName="react-tabs__tab--selected">
              Read List
            </Tab>
            <Tab className="pb-3 px-1 font-bold cursor-pointer transition-all border-b-2 border-transparent outline-none [&.react-tabs__tab--selected]:border-primary [&.react-tabs__tab--selected]:text-primary" selectedClassName="react-tabs__tab--selected">
              Wishlist
            </Tab>
          </TabList>
          
          <TabPanel>
            <ReadList sortingType={sortingType} />
          </TabPanel>
          <TabPanel>
            <Wishlist sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
