import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const loadItems = async () => {
    const res = await fetch("http://localhost:5000/items");
    setItems(await res.json());
  };

  useEffect(() => {
    loadItems();
  }, []);

  const addItem = async () => {
    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    loadItems();
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    });
    loadItems();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1> welcome to my three tier app</h1>
      <p>this app contains three tier application</p>
      <p>react frontend , nodejs backend ,mongoose db</p>
      <h2>DevOps Demo App</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
      />

      <button style={{color:"white", backgroundColor: "green"}} onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button
              style={{ marginLeft: 10, color:"white" , backgroundColor: "red" }}
              onClick={() => deleteItem(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
