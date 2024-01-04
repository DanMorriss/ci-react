import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    // The useEffect runs after ever render (one function to rule them all)
    useEffect(() => {
        document.title = count;
    });
  return (
    <div>
        <button onClick={
            () => setCount(count => count +1)
        }>
            Increment Counter ({count})
        </button>
    </div>
  )
}

export default UseEffectCounter