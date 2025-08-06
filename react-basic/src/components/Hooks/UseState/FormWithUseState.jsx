import React, { useState } from "react";

function FormWithUseState() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = form;
  return (
    <>
      <form>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
        ></input>
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
        ></input>
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        ></input>
      </form>
      {console.log(form)}
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </>
  );
}

export default FormWithUseState;
