import "./App.css";
import Cart from "./Components/cart";
import Item from "./Components/Item";
import { CartProvider } from "./context/CartContextApi";
import Quiz from "./Quiz";

function App() {
  return (
    <div className="main-box">
      <div className="quizblock">
        <Quiz />
      </div>
      <hr></hr>
      <div className="item">
        <h2>Build a Cart 🛒</h2>
        <CartProvider>
          <div className="allItems">
            <Item name="laptop" price={50000} />
            <Item name="phone" price={15000} />
            <Item name="pendrive" price={500} />
          </div>
          <Cart />
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
