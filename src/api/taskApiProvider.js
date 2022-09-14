const root = "http://localhost:3001";

export function newTask(title, status = false) {
  return fetch(`${root}/tasks`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: status,
      title: title,
    }),
  });
}

export async function getTasks() {
  try {
    const res = await fetch(`${root}/tasks`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export function updateTask(title, status, id) {
  return fetch(`${root}/tasks`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      completed: status,
      title: title,
    }),
  });
}

export function deleteTask(id) {
  fetch(`/task/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
}
