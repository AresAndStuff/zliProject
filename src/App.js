import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./views/Tasks";
import Login from "./views/LoginPage";
import { useState, useEffect } from "react";
import { status } from "./api/taskApiProvider";
import "./App.css";

function App() {
  const [login, setLogin] = useState();
  useEffect(() => {
    status().then((res) => {
      if (res.statusCode === 401) {
        setLogin(undefined);
      } else {
        setLogin(res.email);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {login && (
          <>
            <Route path="/" element={<TodoApp />} />
          </>
        )}
        :{<Route path="*" element={<Login />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
