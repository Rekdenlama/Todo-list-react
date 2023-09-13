import { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItem from './SearchItem';

function App() {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  const [items, setItems] = useState(shoppingList ? shoppingList : []);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');
  const setAnsSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    if (items) {
      const listItems = [...items, myNewItem];
      setAnsSaveItems(listItems);
    } else {
      setAnsSaveItems([myNewItem]);
    }
  };

  const handleCheck = (id) => {
    if (!items) return;
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAnsSaveItems(listItems);
  };

  // function handleDelete(id){
  //   const listItems=items.filter(item=>{
  //       return item.id !==id;
  //   });
  //       setItems(listItems);
  //       localStorage.setItem('shoppingList', JSON.stringify(listItems));

  // }

  const handleDelete = (id) => {
    if (!items) return;
    const listItems = items.filter((item) => item.id !== id);
    setAnsSaveItems(listItems);
  };

  //we use e so that it doesn't refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };
  function searchItems(query) {
    return items.filter((item) =>
      item.item.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={(value) => {
          setNewItem(value);
        }}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={(value) => setSearch(value)} />
      <Content
        items={searchItems(search)}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer title="Copyright ©" length={items.length} />
    </div>
  );
}

export default App;
