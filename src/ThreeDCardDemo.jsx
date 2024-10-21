import React from "react";

import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
export function ThreeDCardDemo() {
  return (
    <div>
        <h1 className="text-white text-5xl text-center mt-5">Features</h1>
        <div className="flex lg:flex-row flex-col lg:gap-5 lg:px-10 justify-center">
        
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem]  h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Customizable Learning Paths
              </CardItem>
             
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <img
                  src="./customize.jpg"
                  alt="thumbnail"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem]  h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
               Analytics & Progress Tracking:
              </CardItem>
              
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <img
                  src="./progress.jpg"
                  alt="thumbnail"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem]  h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Interactive Learning Modules
              </CardItem>
              
              <CardItem
                translateZ={100}
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <img
                  src="./VR.jpg"
                  alt="thumbnail"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
    
  );
}
