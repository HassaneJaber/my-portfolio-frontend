"use client";
import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/contacts")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold">Messages</h1>
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg.id} className="p-4 bg-white rounded shadow mt-4">
            <p><strong>{msg.name}</strong> ({msg.email})</p>
            <p>{msg.message}</p>
          </div>
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
}
