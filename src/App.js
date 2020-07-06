import React from "react";
import faker from "faker";
import { DatePicker } from "antd";

import "antd/dist/antd.css";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Hello, {faker.name.findName()}!</h1>
      <h2>Starter project with React, Ant Design, Faker and SCSS.</h2>
      <span>
        <DatePicker
          onChange={e => {
            console.log(e);
          }}
        />
      </span>
    </div>
  );
}
