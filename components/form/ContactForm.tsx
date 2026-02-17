"use client";

import { useState } from "react";

export default function ContactForm() {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <form className="flex flex-wrap gap-4 w-1/3 max-w-2xl rounded-lg border border-neutral-300 p-4 bg-white text-black">
      <div className="flex flex-col gap-2 grow basis-1 max-w-1/2">
        <label>First Name</label>
        <input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400"
          placeholder="First Name"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1 max-w-1/2">
        <label>Last Name</label>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400"
          placeholder="Last Name"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1 max-w-1/2">
        <label>WhatsApp (with country code)</label>
        <input
          value={whatsapp}
          onChange={(e) => {
            setWhatsapp(e.target.value.trim().slice(0, 13));
        }}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400"
          placeholder="+1234567890"
        pattern="[+0-9]{10,14}"
          type="tel"
          required
        />
      </div>
      <div className="flex flex-col gap-2 grow basis-1 max-w-1/2">
        <label>Last Name</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-neutral-300 rounded-lg p-2 font-semibold user-invalid:border-red-400"
          placeholder="email@example.com"
          type="email"
          required
        />
      </div>
    </form>
  );
}
