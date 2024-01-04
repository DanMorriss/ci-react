import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('webiste');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name" >Your Name:</label>
                    <input 
                        value={name}
                        onChange={
                            (event) => setName(event.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category" >Query Category:</label>
                    <select
                        value={category}
                        onChange={
                            (event) => setCategory(event.target.value)
                        }
                        id="id-category"
                        name="category"
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        value={comments}
                        onChange={
                            (event) => setComments(event.target.value)
                        }
                        id="id-comments"
                        name="comments"
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
}

export default ControlledFormHooks