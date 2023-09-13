
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';


function App() {
const [items, setItems]=useState(JSON.parse(localStorage.getItem('shoppingList')));
const[search,setSearch]=useState('');
const [newItem, setNewItem]= useState(''); 
const setAnsSaveItems= (newItems)=>{
  setItems(newItems);
  localStorage.setItem('shoppingList', JSON.stringify(newItems));
}

const addItem=(item)=>{
  console.log(item)
  const id=items.length ? items[items.length-1].id + 1 : 1;
  const myNewItem={id,checked:false, item};
  const listItems= [...items, myNewItem];
  setAnsSaveItems(listItems);
}

const handleCheck=(id)=>{
  if(!items) return;
  const listItems=items.map((item)=> item.id===id ?{ ...item,checked: !item.checked}: item)
  setAnsSaveItems(listItems);
}

// function handleDelete(id){
//   const listItems=items.filter(item=>{
//       return item.id !==id;
//   });
//       setItems(listItems);
//       localStorage.setItem('shoppingList', JSON.stringify(listItems));
  
// }

const handleDelete=(id)=>{
  if(!items) return;
  const listItems=items.filter((item)=>item.id !==id)
  setAnsSaveItems(listItems);
}

//we use e so that it doesn't refresh
const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('');
}
  return (
    <div className="App">
      <Header title="Grocery List"
      />
      <AddItem 
        newItem={newItem}
        setNewItem={(value) => {
          setNewItem(value);
        }}
        handleSubmit={handleSubmit}   
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      {/* <Footer title="Copyright ©"
      length={items.length}
      /> */}
    </div>
  );
}

export default App;
