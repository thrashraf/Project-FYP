import React, { useEffect, useState, useRef } from 'react'

const featuredProducts = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",

];

let count = 0;
let slideInterval: any
export default function Slider () {
    const [currentIndex, setCurrentIndex] = 
    useState(0);

    const slideRef = useRef<HTMLDivElement>(null);

    const removeAnimation = () => {
        if(slideRef.current !== null){

            slideRef.current.classList.remove("fade-anim");
        }
    }

    useEffect(() => {
        if(slideRef.current !== null){

            
            slideRef.current.addEventListener
            ('animationend', removeAnimation)
            slideRef.current.addEventListener
            ('mouseenter', pauseSlider)
            slideRef.current.addEventListener
            ('mouseleave', startSlider)
            startSlider();
        }

    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
                handleOnNextClick();
            }, 3000);
        };
    
        const pauseSlider = () => {
            clearInterval(slideInterval)
        }
    

        const handleOnNextClick = () => {
            if(slideRef.current !== null){

            
                
                count = (count + 1) % featuredProducts.
                length;
                setCurrentIndex(count);
                slideRef.current.classList.add
                ("fade-anim")
            }
        };
        const handleOnPreviousClick = () => {
            if(slideRef.current !== null){
            const productsLength = featuredProducts.
            length;
            count = (currentIndex + productsLength - 1) % productsLength;
            setCurrentIndex(count);
            slideRef.current.classList.add
            ("fade-anim")
            }
        };
        

  return (
      <div className=' flex justify-center items-center'> 
           <div ref={slideRef} className=' lg:w-[40%]  select-none relative '>
          <div className=" aspect-w-16 aspect-h-9">

          <img src={featuredProducts[currentIndex]} alt="" className=' object-contain w-full'/>
          </div>

          <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>

          <img src='/assets/left.png' onClick={handleOnPreviousClick} className=" w-10 h-10 bg-gray-400 rounded-full p-1" ></img>
          <img src='/assets/right.png' onClick={handleOnNextClick}  className=" w-10 h-10 bg-gray-400 rounded-full p-1"></img>
          </div>
      </div>

      </div>
     

  )
}
