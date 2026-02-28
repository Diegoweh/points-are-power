"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi! I'd like to get in touch.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`;
    const url = `https://wa.me/13057880456?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#15548f] focus:ring-2 focus:ring-[#15548f]/20"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#15548f] focus:ring-2 focus:ring-[#15548f]/20"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (000) 000-0000"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#15548f] focus:ring-2 focus:ring-[#15548f]/20"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-[#15548f] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#15548f]/90"
      >
        Send
      </button>
    </form>
  );
}
