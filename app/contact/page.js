"use client";
import { useState } from "react";
import Navbar from "../components/Navbar"; // Ensure correct path
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // ✅ Clear form after success
    } else {
      toast.error("Error sending message. Try again.");
    }
  };

  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-10">
     
      <ToastContainer position="top-right" autoClose={3000} /> {/* ✅ Add ToastContainer */}
      
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}

