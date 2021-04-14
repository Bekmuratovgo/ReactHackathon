import React, { useState } from 'react';
import './EditModal.css'

const EditModal = (props) => {
    let [item,setItem] = useState(props.editTodo)

    function handleEditInput(e){
        let newObj = {...item}
        newObj.name = e.target.value
        setItem(newObj)
    }

    function handleSave(){
        props.handleSaveName(item)
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input 
                    onChange={handleEditInput}
                    value={item.name} 
                    type="text" 
                    className="inp-edit"
                />
                <button onClick={handleSave}>save</button>
            </div>
        </div>
    );
};

export default EditModal;