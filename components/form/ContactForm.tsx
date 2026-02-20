"use client";

import { useState } from "react";

export default function ContactForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <form
      action="https://formsubmit.co/01d0d0d8c86fb790a085dcde70e63051"
      method="POST"
      className="flex flex-wrap gap-4 w-full max-w-2xl rounded-lg border border-neutral-300 p-4 bg-white text-black"
    >
      <div className="flex flex-col gap-2 grow basis-1/3 max-w-full lg:max-w-1/2">
        <label>First Name</label>
        <input
          name="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400 user-valid:border-green-600"
          placeholder="First Name"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1/3 max-w-full lg:max-w-1/2">
        <label>Last Name</label>
        <input
          name="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400 user-valid:border-green-600"
          placeholder="Last Name"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1/3 max-w-full lg:max-w-1/2">
        <label>WhatsApp (with country code)</label>
        <input
          name="WhatsApp"
          value={whatsapp}
          onChange={(e) => {
            setWhatsapp(e.target.value.trim().slice(0, 13));
          }}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400 user-valid:border-green-600"
          placeholder="+1234567890"
          pattern="[+0-9]{10,14}"
          type="tel"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1/3 max-w-full lg:max-w-1/2">
        <label>Email</label>
        <input
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400 user-valid:border-green-600"
          placeholder="email@example.com"
          type="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label>Write Us A Message</label>
        <textarea
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400 user-valid:border-green-600"
          placeholder="Your message..."
          required
          rows={8}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          type="submit"
          className="w-full bg-black text-white hover:font-semibold"
        >
          SUBMIT
        </button>
        <button
          type="reset"
          className="w-full hover:font-semibold"
          onClick={() => {
            setFirstname("");
            setLastname("");
            setWhatsapp("");
            setEmail("");
            setMessage("");
          }}
        >
          CLEAR
        </button>
      </div>
    </form>
  );
}
