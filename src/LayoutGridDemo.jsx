
import React from "react";
import { LayoutGrid } from "./components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    (<div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>)
  );
}

const SkeletonOne = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Lobby
      </p>
      <p className="font-normal text-base text-white"></p>
     
    </div>)
  );
};

const SkeletonTwo = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Training Room
      </p>
      <p className="font-normal text-base text-white"></p>
    
    </div>)
  );
};
const SkeletonThree = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Surroundings
      </p>
      <p className="font-normal text-base text-white"></p>
     
    </div>)
  );
};
const SkeletonFour = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Interaction
      </p>
      <p className="font-normal text-base text-white"></p>
     
    </div>)
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "./image1.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "./image2.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "./image3.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "./image4.jpeg",
  },
];
