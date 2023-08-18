import React from "react";
import { dataBase } from "../../mock";
import Cards from "../Cards/cards";

class Main extends React.Component {
  render() {
    return (
      <div class="flex_container">
        {dataBase.map((item) => {
          return (
            <div class="flex_item">
              <Cards data={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Main;
