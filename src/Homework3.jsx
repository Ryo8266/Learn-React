import React, { useState } from 'react'

export default function Homework3() {
  //Bài 1
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  //Bài 2
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmitForm2 = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  //Bài 3
  const [name, setName] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const handleSubmitForm3 = (event) => {
    event.preventDefault()
    console.log(name, email, password, passwordConfirm)
  }

  //Bài 4
  //Cách 1
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const [dataError, setDataError] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const handleChangeForm = (e) => {
    const { name, value } = e.target

    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const handleSubmitForm41 = (event) => {
    event.preventDefault()

    let errors = {}
    if (dataForm.name === "") {
      errors.name = "Name không được để trống"
    }

    if (dataForm.email === "") {
      errors.email = "Email không được để trống"
    }

    if (dataForm.password === "") {
      errors.password = "Password không được để trống"
    } else if (dataForm.password.length < 6) {
      errors.password = "Password phải có ít nhất 6 kí tự"
    }

    if (dataForm.passwordConfirm === "") {
      errors.passwordConfirm = "Password Confirm không được để trống"
    } else if (dataForm.password !== dataForm.passwordConfirm) {
      errors.passwordConfirm = "Password Confirm không khớp với Password"
    }

    setDataError(errors)
    console.log({ name, email, password, passwordConfirm })
  }

  //Cách 2
  const [errors, setErrors] = useState({})
  const handleSubmitForm42 = (event) => {
    event.preventDefault()

    let validErrors = {}

    if (!name) {
      validErrors.name = "Name không được để trống"
    }

    if (!email) {
      validErrors.email = "Email không được để trống"
    }

    if (!password) {
      validErrors.password = "Password không được để trống"
    } else if (password.length < 6) {
      validErrors.password = "Password phải có ít nhất 6 kí tự"
    }

    if (!passwordConfirm) {
      validErrors.password = "Password Confirm không được để trống"
    } else if (passwordConfirm !== password) {
      validErrors.password = "Password Confirm không khớp với Password"
    }

    setErrors(validErrors)
    console.log(name, email, password, passwordConfirm)
  }

  return (
    <div>
      <h3>Bài 1</h3>
      <div>
        <input type="text" onChange={handleChange} />
        <p>Xin chào {inputValue}</p>
      </div>

      <h3>Bài 2</h3>
      <div>
        <form>
          <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmitForm2}>Login</button>
        </form>
      </div>

      <h3>Bài 3</h3>
      <div>
        <form>
          <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
          <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
          <input type="password" name='passwordConfirm' onChange={(e) => setPasswordConfirm(e.target.value)} />
          <button onClick={handleSubmitForm3}>Submit</button>
        </form>
      </div>

      <h3>Bài 4</h3>
      <h4>Cách 1</h4>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChangeForm} />
          {dataError.name && <p style={{ color: "red" }}>{dataError.name}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChangeForm} />
          {dataError.email && <p style={{ color: "red" }}>{dataError.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChangeForm} />
          {dataError.password && <p style={{ color: "red" }}>{dataError.password}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Confirm Password</label>
          <input type="text" name="passwordConfirm" onChange={handleChangeForm} />
          {dataError.passwordConfirm && <p style={{ color: "red" }}>{dataError.passwordConfirm}</p>}
        </div>
        <button onClick={handleSubmitForm41} style={{ marginTop: "10px" }}>Gửi</button>
      </form>

      <h4>Cách 2</h4>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Name</label>
          <input type="text" name="name1" onChange={(e) => setName(e.target.value)} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Email</label>
          <input type="email" name="email1" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Password</label>
          <input type="password" name="password1" onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Confirm Password</label>
          <input type="text" name="passwordConfirm1" onChange={(e) => setPasswordConfirm(e.target.value)} />
          {errors.passwordConfirm && <p style={{ color: "red" }}>{errors.passwordConfirm}</p>}
        </div>
        <button onClick={handleSubmitForm42} style={{ marginTop: "10px" }}>Gửi</button>
      </form>
    </div>
  )
}
