import React from "react";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../api";

const LoginPage = () => {
  const handleLogin = async (credentials) => {
    const response = await loginUser(credentials);
    if (response.success) {
      // Başarılı giriş sonrası yönlendirme veya diğer işlemler
      console.log("Login successful:", response);
    } else {
      // Başarısız giriş için hata mesajı gösterme
      console.error("Login failed:", response.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
