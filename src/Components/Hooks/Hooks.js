import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Hooks() {
    const inputRef = useRef(null);


    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello";
    }, []);

    
    
  return (
    <div>
        <input ref={inputRef} value="" style={'width: 400'}/>
    </div>
  )
}

export default Hooks