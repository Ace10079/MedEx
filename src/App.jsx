import React from 'react'
import { Cover } from './components/ui/cover'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import { ThreeDCardDemo } from './ThreeDCardDemo';
import { CardSpotlight } from './components/ui/card-spotlight';
import { CardSpotlightDemo } from './CardSpotlightDemo';
import { LensDemoThird } from './LensDemoThird';
import { BackgroundBeams } from './components/ui/background-beams';
import { BackgroundBeamsDemo } from './BackgroundBeamsDemo';
import { HeroScrollDemo } from './HeroScrollDemo';
import { SignupFormDemo } from './SignupFormDemo';
import { AuroraBackgroundDemo } from './AuroraBackgroundDemo';
import { LayoutGridDemo } from './LayoutGridDemo';


function App() {
  const words = `“Using this VR platform has given me confidence in surgical techniques before ever stepping into a real operating room.”
  — John D., Medical Student
`;
  return (
    <div>
       <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       Revolutionize Medical Learning with <br /> Immersive  <Cover>Virtual Reality</Cover>
      </h1>
      <AuroraBackgroundDemo/>
      <div className="h-[20rem] w-full bg-black bg-grid-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-10 text-xl">
      Our cutting-edge VR platform brings the operating room and anatomy lab right to your headset. Whether you're a student learning about the human body or a professional practicing surgical techniques, our platform offers a dynamic and immersive learning experience. With realistic simulations, you can safely explore medical procedures and gain hands-on skills at your own pace.
      </p>
    </div>
    <div className='flex justify-center items-center text-center w-full'>
    <TextGenerateEffect words={words} />;
    </div>
 <ThreeDCardDemo/>
 <div className='flex justify-center lg:gap-10 lg:flex-row flex-col'>
 <CardSpotlightDemo/>
 <LensDemoThird/>
 </div>
<BackgroundBeamsDemo/>
<LayoutGridDemo/>
<HeroScrollDemo/>
<SignupFormDemo/>
    </div>
  )
}

export default App
