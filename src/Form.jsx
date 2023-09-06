import React, { useState } from 'react'

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newItemName);
        setNewItemName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Grovery Buddy</h4>
            <div className="form-control">
                <input type="text" className='form-input' value={newItemName} onChange={(event) => setNewItemName(event.target.value)} />
            </div>
            <button type='submit' className='btn'>Add Item</button>
        </form>
    )
}

export default Form