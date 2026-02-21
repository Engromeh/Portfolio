import React, { useState } from "react";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ma07ymj",
        "template_pauslot",
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "E7jcO5gd_Be4aiG-p"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. 😢");
        }
      );
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6 md:px-20">
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h5 className="text-[#facc15] font-semibold text-lg">Get In Touch</h5>
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-400">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[#facc15]">
              <FiMail size={22} />
              <span>mahmoudromeh10@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3 text-[#facc15]">
              <FiPhone size={22} />
              <span>01125046782</span>
            </div>

            <div className="flex items-center space-x-3 text-[#facc15]">
              <FiMapPin size={22} />
              <span>Helwan, Cairo, Egypt</span>
            </div>

            <div className="flex items-center space-x-3 text-[#facc15]">
              <FiLinkedin size={22} />
              <a
                href="https://www.linkedin.com/in/mahmoud-romeh-8a4b0b36a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mahmoud Romeh
              </a>
            </div>

            <div className="flex items-center space-x-3 text-[#facc15]">
              <FiGithub size={22} />
              <a
                href="https://github.com/Engromeh"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Engromeh
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-[#1a1a1a] p-6 rounded-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d0d0d] outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d0d0d] outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d0d0d] outline-none"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d0d0d] outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d0d0d] outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#facc15] text-black font-semibold py-3 rounded hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;