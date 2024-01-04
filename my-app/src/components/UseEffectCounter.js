import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // The useEffect runs after ever render. 
    // The [count] after the arrow function is to specify it should run after the [count] is updated.
    useEffect(() => {
        console.log('count 1 effect')
        document.title = count;
    }, [count]);
    // To run it only once, pass the second parameter as an empty array.
    useEffect(() => {
        console.log('Creating timer')
        const interval = setInterval(() => {
            setTime(time => time +1)
        }, 1000)
    }, [])

    return (
    <div>
        <button onClick={
            () => setCount(count => count +1)
        }>
            Increment Counter ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
)
}

export default UseEffectCounter