import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from './styles.module.scss'

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${id}`)
      .then(({ data }) => setName(data.nombre))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={styles.welcome}>
      <h3>{name ? `Felicitaciones ${name}` : `Cuidadito`}</h3>
      <h2>{name ? "Iniciaste sesión correctamente" : "Te estoy viendo"}</h2>
        <div className={styles.buttons}>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/')}>Register</button>
        </div>
    </div>
  );
};

export default Welcome;
