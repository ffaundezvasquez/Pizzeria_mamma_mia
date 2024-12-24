import React from "react";
import { useState } from "react";

const Register = () => {
  const [mail, setMail] = useState("");
  const [pass1, setPass1] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail.trim() || !pass1.trim() || !confirmPassword.trim()) {
      alert("Debes completar todos los campos"), setSuccessMessage("");
    } else if (pass1.length < 6) {
      alert("La contraseña debe contener almenos 6 caracteres.");
      setSuccessMessage("");
    } else if (pass1 !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      setSuccessMessage("");
    } else {
      alert("Tu cuenta ha sido creada.");
      setSuccessMessage("Tu cuenta ha sido creada.");
      setMail("");
      setPass1("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <h3 className="registerTittle text-center">Crea tu cuenta</h3>
      <br></br>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Ingresa tu correo
          </label>
          <input
            type="email"
            className="form-control"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            Crea tu contraseña
          </label>
          <input
            type="password"
            className="form-control"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            Vuelve a ingresar tu contraseña
          </label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark mb-4">
          Enviar
        </button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Register;
