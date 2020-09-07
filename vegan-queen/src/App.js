import React, { useState } from "react";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import "./components/utils/styles.css";
import Swal from "sweetalert2";

//Components
import Main from "./components/Main";
import Role from "./components/Role";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import MenuBreakfast from "./components/Breakfast";
import MenuBurger from "./components/Burger";
import Orders from "./components/Orders";
import Order from "./components/Order/Order.js";

//firebase data
import { firebase } from "./firebase";

//JSON
import Data from "./components/utils/Data/Data.json";

function App() {
  const [order, setOrder] = useState([]);

  const addingProductToOrder = (product) => {
    let newOrder = [...order];
    // if existe producto en orden
    if (order.find((item) => item.name === product.productName)) {
      // entonces incrementar uno a la cantidad
      newOrder = newOrder.map((i) => {
        if (i.name === product.productName) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        } else {
          return i;
        }
      });
    } else {
      newOrder.push({
        name: product.productName,
        quantity: 1,
        cost: product.cost,
      });
    }

    setOrder(newOrder);
    console.log(newOrder);
  };

  const deletingProductToOrder = (product) => {
    let newOrder = [];
    const foundItem = order.find((item) => item.name === product.productName);

    if (!foundItem) {
      return Swal.fire("El producto no existe en la orden");
    }

    if (foundItem.quantity === 1) {
      console.log("debug 1");
      newOrder = order.filter((item) => item.name !== foundItem.name);
    } else {
      console.log("debug 2");
      newOrder = order.map((item) => {
        return item.name === product.productName
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      });
    }

    setOrder(newOrder);
  };
  //Firebase
  /* React.useEffect(() => {
      const getOrders = async () => {
        try {
          const db = firebase.firestore();
          const data = await db.collection("orders").get();
          console.log(data.docs);
        } catch (error) {
          console.log(error);
        }
      };
      getOrders();
    }, []);*/

  /* const increasingQuantity = () => {

  }; */

  const dateAndTime = new Date().toLocaleString();
  const date = new Date().toLocaleDateString();
  //const time = new Date().toLocaleTimeString()

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/role">
            <Role />
          </Route>
          <Route path="/waiter">
            <Waiter date={date} />
          </Route>
          <Route path="/chef">
            <Chef date={date} />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/menu-breakfast">
            <MenuBreakfast
              Data={Data.breakfast}
              /* order={order} */
              addingProductToOrder={addingProductToOrder}
              deletingProductToOrder={deletingProductToOrder}
            />
            <Order order={order} />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger
              /* Data={Data.burger} */
              dataHamburger={Data.hamburger}
              dataIngredients={Data.ingredients}
              dataExtras={Data.extras}
              dataDrinks={Data.drinks}
              dataAccompaniments={Data.accompaniments}
              addingProductToOrder={addingProductToOrder}
              deletingProductToOrder={deletingProductToOrder}
            />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/orders">
            <Orders dateAndTime={dateAndTime} />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
