import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Login from "./views/LoginPage";
import { useState, useEffect } from "react";
import { status } from "./api/taskApiProvider";
import "./App.css";

function App() {
  const [login, setLogin] = useState();
  useEffect(() => {
    status()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.email) {
          return setLogin(data.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (login) {
    console.log(login);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Expenses />} />
          <Route path="/:id" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <Login />;
  }
}

export default App;
