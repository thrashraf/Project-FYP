import React, { useEffect, useState, useRef } from 'react'

const featuredProducts = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",

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
      <div className=' flex justify-center items-center '> 
           <div ref={slideRef} className=' w-[100%]  h-[600px] select-none relative '>
          <div className=" aspect-w-16 aspect-h-9">

          <img src={featuredProducts[currentIndex]} alt="" className=' object-cover w-full lg:h-[650px] '/>
          </div>

          
      </div>

      </div>
     

  )
}
