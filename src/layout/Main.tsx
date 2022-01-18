import React from "react";
import Todo from "../components/Todo";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "./Main.scss";

const todoList = [
  {
    id: "1",
    content: "work 1",
  },
  {
    id: "2",
    content: "work 2",
  },
  {
    id: "2",
    content: "work 2",
  },
  {
    id: "2",
    content: "work 2",
  },
  {
    id: "2",
    content: "work 2",
  },
  {
    id: "2",
    content: "work 2",
  },
  {
    id: "2",
    content: "work 2",
  },
];

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <div className="container">
            <div className="row">
              <Header />
            </div>
            <div className="row">
              <div className="d-flex flex-wrap">
              {todoList.map((x) => (
                <Todo id={x.id} content={x.content} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <Footer />
      </div> */}
    </div>
  );
};

export default Main;
