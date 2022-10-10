import React from "react";
import Header  from "./FoodApp/Layouts/Header";
import Meals from "./FoodApp/Meals/Meals";

const App = () => {

  return (
    <div >
      {/* <Demo/> */}
      <Header/>
      <main >
        <Meals/>
      </main>
    </div>
  );
};

export default App;
