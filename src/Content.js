
import ItemList from './ItemList';

//on passsing value we need to give function if we pass parameter
const Content = ({items,handleCheck,handleDelete}) => {
    // setname is used to change it dynamically
  return(
    <main>
        {items?.length ?(
            <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        ) :
        (
            <p style={{marginTop: '2rem'}}>Your list is empty</p>
        )}
    </main>
  )
  
}

export default Content