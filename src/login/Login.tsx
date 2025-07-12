import { Input } from "../components/ui/input"



const Login=()=>{
    return (
        <div id="form">

            <div id="left">
                <img src="src\login\img.jpg" alt="Welcome" />
            </div>
            <div id="right">
                <h2>Login</h2>
                <form >
                  <label htmlFor="email">Email :</label>
                  <Input
                    type="email" id="email"
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="password">Password :</label>
                  <Input
                    type="password" id="password"
                    placeholder="Password"
                    required
                  />
                  <button type="submit">Login</button>
                </form>

          </div>
        </div>
    );


};

export default Login;