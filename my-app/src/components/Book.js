import React from 'react'

function Book(props) {
    const book = props.book
    return (
        <div>
            <div>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
            </div>
        </div>
    )
}

export default Book