"use client";
import "./about.css";
import React, { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";

export default function About() {
  const [todo, setTodo] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todo")) || [];
    setData(storedTodo);
  }, []);
  console.log(setData);

  function setItem(e) {
    e.preventDefault()
    const newTodo = todo.trimStart();
    if (newTodo === "") {
      alert("Please enter todo");
    } else {
      const updatedTodo = [...data, newTodo];
      localStorage.setItem("todo", JSON.stringify(updatedTodo));
      setData(updatedTodo);
      setTodo("");
    }
  }

  function deleteTodo(id) {
    setData(
      data.filter((item, index) => {
        return id !== index;
      })
    );
    localStorage.setItem("todo", JSON.stringify(data));
  }

  function editTodo(id) {
    setData(data.splice(id, 1, todo));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [deleteTodo]);

  return (
    <>
      <main className="todolist">
        <h1>Todo List</h1>
        <form>
          <input
            required
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value.trimStart())}
          />
          <button onClick={setItem}>
            Add
          </button>
        </form>
        <ul>
          {data.map((item, index) => {
            return (
              <div key={index} className="list">
                <li>{item}</li>
                <div className="edit__delete">
                  <BsFillTrashFill onClick={() => deleteTodo(index)} />
                  <MdOutlineEdit onClick={() => editTodo(index)} />
                </div>
              </div>
            );
          })}
        </ul>
      </main>
      <section>
        <h5> Change This Todo </h5>
        
        {/* <form>
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value) } />
          <button> Save changes </button>
        </form> */}
      </section>
    </>
  );
}
