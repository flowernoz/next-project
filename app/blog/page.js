"use client";
import "../about/about.css";
import "./blog.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFillArrowUpLeftSquareFill, BsFillTrashFill } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";

export default function Blog() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [id, setId] = useState("");
  const api = "https://655242b95c69a7790329ca6e.mockapi.io/todo";

  function get() {
    useEffect(() => {
      axios.get(api).then((res) => setData(res.data));
    }, []);
  }
  get();

  console.log(data);

  function sendData(e) {
    e.preventDefault();
    axios
      .post(api, {
        list: todo,
      })
      .then((res) => window.location.reload());
    setTodo("");
  }

  function deleteTodo(id) {
    let state = window.confirm("Do you want to delete this to-do?");
    if (state) {
      axios.delete(api + "/" + id).then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      });
    }
  }

  function putTodo() {
    axios
      .put(api + "/" + id, { list: editTodo })
      .then((res) => window.location.reload());
  }

  function openEdit(item, id) {
    setOpen(!open);
    console.log("ok");
    setEditTodo(item);
    setId(id);
  }

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
          <button onClick={sendData}>Add</button>
        </form>
        <ul>
          {data.map((item, index) => {
            return (
              <div key={index} className="list">
                <li>{item.list}</li>
                <div className="edit__delete">
                  <BsFillTrashFill onClick={() => deleteTodo(item.id)} />
                  <MdOutlineEdit onClick={() => openEdit(item.list, item.id)} />
                </div>
              </div>
            );
          })}
        </ul>
      </main>
      {open && (
        <section>
          <div className="modal">
            <h5>
              Change This Todo <span onClick={() => setOpen(false)}>x</span>
            </h5>
            <div className="edited">
              <input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
              <button onClick={() => putTodo()}> Save changes </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
