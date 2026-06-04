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
      setStatus({
        type: "error",
        message: "Por favor, complete todos los campos",
      });
      return;
    }

    if (!email.includes("@")) {
      setStatus({
        type: "error",
        message: "Por favor, entre un correo válido",
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
          _subject: `${name} está interead@ en los servicios de coaching`,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "¡Información enviada exitosamente!",
        });
        setName("");
        setEmail("");
        setPhone("");
      } else {
        throw new Error("No se pudo enviar la información");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Envío fallido. Por favor, intente de nuevo.",
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
          placeholder="Nombre"
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
          placeholder="Teléfono"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-10 form-btn">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {status.message && (
        <div
          style={{
            color: status.type === "success" ? "green" : "@ec0000",
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
