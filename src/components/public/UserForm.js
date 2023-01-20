import React from 'react'

export const UserForm = () => {
  return (
    <div className='conteiner'>
      <div class="col-12">
        <label for="username" class="form-label">Nombre del personaje</label>
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" id="username" placeholder="Nombre personaje" />
        </div>
        <div class="col-12">
          <label for="address" class="form-label">Genero</label>
          <input type="text" class="form-control" id="address" placeholder="Genero" />
        </div>
        <div class="col-12">
          <label for="address" class="form-label">Especie</label>
          <input type="text" class="form-control" id="address" placeholder="Especie" />
          </div>
        </div>
      </div>
    

  )
}

export default UserForm
