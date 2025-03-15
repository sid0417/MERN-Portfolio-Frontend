import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import Leaf from "../Home/Leaf";


const Contact = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("⏳ Wait until your message reaches me...");
    const formData = new FormData(form.current);
    const contactData = Object.fromEntries(formData);

    try {
      // Send email via EmailJS using .env variables
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Store the message in the backend using .env variable
      const response = await fetch(import.meta.env.VITE_EMAILJS_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) throw new Error("Failed to save message");
      setStatus("✅ Message sent & saved successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-screen h-screen ${
        darkMode ? "bg-dark-gradient" : "bg-light-gradient"
      } p-24 transition-colors relative flex justify-center items-center overflow-hidden`}
    >
      <div className="">

      </div>
      <div className="text-gray-800 max-w-md mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md flex flex-col items-center sm:mb-0 mb-32">
        <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded"
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded"
              disabled={loading}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="mt-4 text-sm text-center">{status}</p>}
          </form>
        </div>

        <div className="relative flex justify-center items-center mt-4">
          <div className="relative">
            <figure className="mt-2">
              <img src="plant.png" alt="Plant" />
            </figure>
            <figure className="absolute bottom-2 left-28">
              <img src="tree.png" alt="Tree" />
            </figure>
          </div>
         
        </div>
         
      
      </div>
     
      <Leaf />
    </div>
  );
};

export default Contact;
