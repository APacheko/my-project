"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  async function sendForm() {
    try {
      await axios.post("http://localhost:3000/api/send-request", {
        name,
        phone,
        email,
        message
      });
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="main">
      <p className="text">Имя</p>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Телефон</p>

      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <p>E-mail</p>

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Сообщение</p>

      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="button" onClick={sendForm}>
        Отправить
      </button>
    </div>
  );
}
