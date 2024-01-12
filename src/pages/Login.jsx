import React, { useState } from "react";
import { setLoggedIn } from "../slices/connectionSlice";
import { useLoginMutation } from "../slices/adminApiSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email: username, password });
      if (response.error) {
        alert("Combinaison incorrecte");
      } else {
        dispatch(setLoggedIn());
        setIsLogged(true);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLogged) {
    return <Navigate to="/admin" />;
  }

  return (
    <div id="wrapper">
      <h1>Page d'administration</h1>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="div-login">
          <label>Nom d'utilisateur</label>
          <input
            className="input-login"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="div-login">
          <label>Mot de passe</label>
          <input
            className="input-login"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn-login" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
