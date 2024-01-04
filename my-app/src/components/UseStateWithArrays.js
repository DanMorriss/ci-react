import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        setNums([...nums, nums.length +1]);
    }
    // Use map and filter to avoid bugs
    const buggyPushNums = () => {
        nums.push(nums.lenght +1);
        setNums(nums);
        console.log(nums);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, index) => {
                return index !== nums.length -1;
            })
        )
    }
  return (
    <div>
        <button onClick={addNums}>
            New Item
        </button>
        <button onClick={buggyPushNums}>
            Buggy Push Item
        </button>
        <button onClick={removeNum}>
            Remove Item
        </button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays