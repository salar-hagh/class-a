import { useContext } from "react";
import Button from "../../components/button/Button";
import { login } from "../../services/api";
import Cookie from "js-cookie";
import { AppContext } from "../../context/AppContext";

function Login() {
  const { setIsLogin } = useContext(AppContext);

  const handleLogin = async () => {
    try {
      const data = await login({ username: "salar", password: "1234" });
    } catch (error) {
      // success
      const response = {
        token: "sdkSJDKJSFDKJSLKDFJLSKDJFKDJFKDJFSKDJFLKSJDLKFJSLD",
      };

      setIsLogin(true);
      Cookie.set("token", response.token);
    }
  };

  return (
    <div className="flex justify-center items-center pt-32F">
      <div className="bg-white w-96">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
