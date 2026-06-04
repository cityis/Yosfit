import React, { useState } from "react";

// CHANGE THIS TO YOUR EMAIL ADDRESS
const YOUR_EMAIL = "waldin.kano@gmail.com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    if (!email.includes("@")) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + YOUR_EMAIL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          _subject: `New Contact Form Submission from ${name}`,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setPhone("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="z-50">
      <div className="input-container">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>

      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      <div className="input-container">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-10 form-btn">
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {status.message && (
        <div
          style={{
            color: status.type === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
