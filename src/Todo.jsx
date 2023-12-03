import React, { useState } from 'react'

function Todo() {
    const [listArray, setListArray] = useState([]);
    const [listItem, setListItem] = useState({});
    const [deleteBtn, setDeleteBtn] = useState([]);

    function updateListText(event){
        setListItem({...listItem, [event.target.name]:event.target.value})
    }

    function addToList(){
        setListArray([...listArray, {...listItem}]);
        setDeleteBtn([...deleteBtn, false]);
    }

    function showDelete(idx){
        let deleteBtnDuplicate = deleteBtn;
        deleteBtnDuplicate.splice(idx,1,true);
        setDeleteBtn([...deleteBtnDuplicate]);
    }

    function handleDelete(idx){
        let listArrayDuplicate = listArray;
        listArrayDuplicate.splice(idx,1);
        setListArray([...listArrayDuplicate]);
        deleteBtn.splice(idx,1);
        setDeleteBtn([...deleteBtn]);
    }
  return (
    <div className='todo'>
            <input type='text' name='listItem' onChange={updateListText}/>
            <input type='button' value='Submit' onClick={addToList}/>
       
        { listArray.map((obj,idx) => (
            <div style={{display:'flex', marginLeft:'50%'}}>
                <input type='checkbox' onChange={() => {showDelete(idx)}}/>
                <p>{obj.listItem}</p>
                {deleteBtn[idx]? <button onClick={() => {handleDelete(idx)}}>Delete</button>:<></>}
            </div>
        ))}
    </div>
  )
}

export default Todo