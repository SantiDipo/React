import React, { useEffect, useState } from 'react'
import { useUserForm } from '../hooks/Custom.hooks'

export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();
  const [areEquals, setAreEquals] = useState(true);
  const [PasswordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === PasswordConfirmation)
  }, [PasswordConfirmation])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (

    <div className='w-25 mx-auto mt-5'>

      <div class="col-12">

        <label for="username" class="form-label">
          Nombre del personaje
        </label>

        <div class="input-group has-validation">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Nombre personaje"
            name='nombre'
            onChange={handleChanges}
          />

        </div>

        <div class="col-12">

          <label for="username" class="form-label">
            Repita el nombre del personaje
          </label>

          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Nombre personaje"
              onChange={handlePasswordConfirmation}
            />
          </div>

          <div class="col-12">

            <label for="address" class="form-label">
              Genero
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Genero"
              name="genero"
            />

          </div>

          <div class="col-12">

            <label for="address" class="form-label">
              Especie
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Especie"
              name="especie"
            />

          </div>

          <br />
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Enviar
          </button>

        </div>

      </div >

    </div >

  )
}

export default UserForm
