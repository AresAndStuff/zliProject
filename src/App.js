import Dashboard from "./components/Dashboard";
import { newTask, getTasks } from "./api/taskApiProvider";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(0);
  useEffect(() => {}, []);

  return <Dashboard />;
}

export default App;
