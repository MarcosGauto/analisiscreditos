import "./login.css";
import backImg from "../img/fondo.png"


const Login = () => {

    return(
        <div className="contenedorImg">
            
            <div className="loginConteiner">
                <h1>Grupo Nucleo</h1>
                <h2>Login</h2>
                <div className="login">
                    <label>Email</label>
                        <input></input>
                    <label>Contraseña</label>
                        <input></input> 
                    <input type="submit"></input>

                </div>

            </div>
        </div>
    )

}

export default Login;

