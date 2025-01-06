import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'
const TypedText = () => {
    //create a ref to access the DOM element
    const typedRef = useRef(null);

    useEffect(()=>{
        //initalize Typed.js
        const typed = new Typed(typedRef.current, {
            strings: ["Dice Game"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        })

        //cleanup function to destroy the instance
        return ()=>{
            typed.destroy();
        };
    }, []);
  return (
    <div className='w-[528px] h-[128px] font-bold text-[78px] pl-[110px]' id='text'>
      <span ref={typedRef}></span>
    </div>
  )
}

export default TypedText
