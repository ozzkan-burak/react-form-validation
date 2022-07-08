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

  console.log("values", values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={onChange}
          label="User Name : "
          errorMessage="Something went wrong"
          pattern="^[A-Za-z0-9]{3,16}$"
          type="text"
        />
        <FormInput
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
          label="E-mail : "
          errorMessage="Something went wrong"
          type="email"
        />
        <FormInput
          name="fullname"
          placeholder="Full Name"
          value={values.fullname}
          onChange={onChange}
          label="Full Name : "
          errorMessage="Something went wrong"
          type="text"
        />
        <FormInput
          name="etc"
          placeholder="ETC"
          value={values.etc}
          onChange={onChange}
          label="ETC : "
          errorMessage="Something went wrong"
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
