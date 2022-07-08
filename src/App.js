import { useRef, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    etc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          placeholder="Kullanıcı Adı"
          value={values.username}
          onChange={onChange}
          label="Kullanıcı Adı : "
          errorMessage="Kullanıcı adı 3-16 karakter arası olmalıdır, özel kaakter içeremez"
          pattern="^[A-Za-z0-9]{3,16}$"
          type="text"
        />
        <FormInput
          name="email"
          placeholder="E-Posta"
          value={values.email}
          onChange={onChange}
          label="E-Posta : "
          errorMessage="Geçerli Eposta adresi giriniz"
          type="email"
        />
        <FormInput
          name="fullname"
          placeholder="İsim Soyisim"
          value={values.fullname}
          onChange={onChange}
          label="İsim Soyisim: "
          errorMessage="İsim - Soyisim alanı boş geçilemez !"
          type="text"
        />
        <FormInput
          name="etc"
          placeholder="ETC"
          value={values.etc}
          onChange={onChange}
          label="ETC : "
          errorMessage="Bu alan boş bırakılamaz !"
          type="text"
        />
        <FormInput
          name="password"
          placeholder="Şifre"
          value={values.etc}
          onChange={onChange}
          label="Şifre : "
          errorMessage="Şifre alanı boş geçilemez !"
          type="password"
        />
        <FormInput
          name="confirmPassword"
          placeholder="Şifre Tekrarı"
          value={values.etc}
          onChange={onChange}
          label="Şifre Tekrarı : "
          errorMessage="Şifreleriniz uyuşmuyor"
          type="password"
        />
        <button className="submit-button">Gönder</button>
      </form>
    </div>
  );
}

export default App;
