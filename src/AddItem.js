import {FaPlus} from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef();

  // useEffect(() => {
  //   console.log(inputRef.current)
  // },[])
  
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input autoFocus 
            type="text"
            ref={inputRef}
            id="addItem"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e)=> {
              console.log(e.target.value)
              setNewItem(e.target.value)}}
         />
         
         <button
            type="submit"
            aria-label ="Add Item" 
            onClick={()=>inputRef.current.focus()}
        >  
        <FaPlus />
    </button>
    </form>

  )
}

export default AddItem