import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Firebase konfiguratsiyasini sozlash (bu qismni o'zgartiring)
    const firebaseConfig = {
        apiKey: "AIzaSyCq6J937vAaDwr1JDTMHHrJNcZVyZZRsL4",
        authDomain: "todo-app-24f65.firebaseapp.com",
        projectId: "todo-app-24f65",
        storageBucket: "todo-app-24f65.appspot.com",
        messagingSenderId: "420354704214",
        appId: "1:420354704214:web:eca7680c8d7593af7a0cf7"
      };

    // Firebase'i boshlash
    firebase.initializeApp(firebaseConfig);

    // Firestore dan todos collection dan ma'lumotlarni olish
    const db = firebase.firestore();
    const unsubscribe = db.collection('todos').onSnapshot(snapshot => {
      const todosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
