import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthForm.css'; 


export const Login: React.FC = () => {
  const [email, setEmail] = useState('');//estado local para los campos del formulario
  //se guardan los datos de forma controlada y MOMENTANIA
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const { login } = useAuth();//COGE LA FUNCION DEL authProvider
  const navigate = useNavigate();//para moverse por la SPA sin actualizar la pagina

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();//aquestalinea evita que quan el form s'envvii s'actualitzi la pag,
    //ja que de normal es comporta aixi
    setErr(null);
    try {
      await login(email, password); 
      navigate('/', { replace: true });
    } catch (error: any) {
      setErr(error?.response?.data?.message || 'Error al iniciar sesión');
    }//busca que el backend li hagi enviat un missatge d'error, en cas que no, posa un missatge generic
  };

  return (
<div className="auth-container">
      <form className="form" onSubmit={submit}>
        <p className="title">Login</p>
        <p className="message">Inicia sesión para ver los eventos.</p>

        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Username</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>


        {err && <p className="form-error">{err}</p>}

        <button type="submit" className="submit">Entrar</button>

        <p className="signin">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};
