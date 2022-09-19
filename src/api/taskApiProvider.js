const root = "http://localhost:3001";

export function newTask(title, status = false) {
  return fetch(`${root}/auth/cookie/tasks`, {
    method: "POST",
    credentials: "include",
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
    const res = await fetch(`${root}/auth/cookie/tasks`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export function updateTasks(title, status, id) {
  return fetch(`${root}/auth/cookie/tasks`, {
    method: "PUT",
    credentials: "include",
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
  fetch(`${root}/auth/cookie/task/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });
}

export function login(email, password) {
  return fetch(`${root}/auth/cookie/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}

export function logout(email) {
  return fetch(`${root}/auth/cookie/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
}

export function status() {
  return fetch(`${root}/auth/cookie/status`, {
    credentials: "include",
  });
}
