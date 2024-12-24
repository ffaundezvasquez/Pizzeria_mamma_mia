import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [mail, setMail] = useState("")
const [password, setPassword] = useState("")
const [successMessage, setSuccessMessage] = useState('');

const handleLogin = (e) => {
    e.preventDefault()
    if (!mail.trim() || !password.trim()){
        alert('Debes completar todos los campos');
        setSuccessMessage("")
        } else {
            alert("Cuenta iniciada existosamente!");
            setSuccessMessage("Cuenta iniciada existosamente!")
            setMail("");
            setPassword("");
        }
};
  return (
    <div>
           <h1 className='text-center'  > Login </h1>
            <form onSubmit={handleLogin} className='container'>
                <div className="form-group">
                    <p>Email</p>
                    <input type="email" value={mail} className="form-control" onChange={(e) => setMail(e.target.value) }/>
                    <p>Contraseña</p>
                    <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value) } />
                    <button className="btn btn-dark mt-3" type="submit">Ingresar</button>
                    <br></br>
            </div>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form> 
    </div>
  )
}

export default Login