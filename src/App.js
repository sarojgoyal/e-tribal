import React from "react";
import TopNav from "./components/TopNav";
import Dashboard from "./screens/Dashboard";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <TopNav />
      <Dashboard />
    </CartProvider>
  );
};

//This comment was done by Apoorv Verma on 8th April!!!by 
//hello1
export default App;
