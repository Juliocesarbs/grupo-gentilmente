import React, { useState } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signin, signup } from '../../store/actions/usuarioActions'
import { setAviso } from '../../store/actions/avisoActions'

import imgLogo from "../../assets/logo.png";
import imgLog from "../../assets/login.png";
import imgReg from "../../assets/register.png";

import Alerta from "./alerta/Alerta";

import "./Login.css";

function Login(props) {
  const [container, setContainer] = useState("container");
  const signUp = props.signUp

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    setContainer("container loading-mode");
    props.setAviso({ title: "Conectando...", msg: "Aguarde um momento enquanto nos conectamos em sua conta"})
    props.signin({ "email": email, "password": password })
  };

  const signup = async () => {
    setContainer("container creating-mode");
    props.setAviso({ title: "Criando...", msg: "Aguarde um momento enquanto criamos sua nova conta"})
    props.signup({ "name": name, "email": email, "password": password })
  };

  return (
    <div className="auth">
      <div className={container}>
        <div className="forms-container">
          <div className="signin-signup">
            <div className="signin-form">
                <img src={imgLogo} className="logo" alt="" />
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="email"
                  placeholder="usuário"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"/>
                <input
                  type="password"
                  placeholder="senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className="btn solid" onClick={signin}>
                <span>Entrar</span>
              </button>
            </div>

            <div className="signup-form">
              <h2 className="title">Registrar</h2>
              <div className="input-field">
                <i className="fas fa-smile" />
                <input
                  type="text"
                  placeholder="seu nome"
                  autoCapitalize="words"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  placeholder="seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className="btn solid" onClick={signup}>
                <span>Registrar</span>
              </button>
            </div>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Você é novo aqui?</h3>
              <p>Crie sua conta e faça parte da equipe!</p>
              <button
                className="btn transparent"
                onClick={() => setContainer("container sign-up-mode")}
              >
                Registrar
              </button>
            </div>
            <img src={imgLog} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Já possui uma conta?</h3>
              <p>O que esta esperando? Vamos começar!</p>
              <button
                className="btn transparent"
                onClick={() => setContainer("container")}
              >
                Login
              </button>
            </div>
            <img src={imgReg} className="image" alt="" />
          </div>
        </div>

        <div className="panel loading-creating">
          <Alerta onClick={signUp ? () => setContainer("container sign-up-mode") : () => setContainer("container")} />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({ signin, signup, setAviso }, dispatch)
export default connect(null, mapDispatchToProps)(Login);
