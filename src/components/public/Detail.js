import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import RickAndMortyServices from '../../services/RickAndMorty.services';

export const Detail = () => {

  const [personaje, setPersonaje] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    RickAndMortyServices.getAllCharactersById(id)
      .then((data) => setPersonaje(data));
  }, [])

  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img src={personaje.image} className="d-block mx-auto mb-4" alt="" width="300" height="300" />
        <h1 className="display-5 fw-bold">{personaje.name}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Sexo:{personaje.gender}
            <br />
            Especie:{personaje.species}
            <br />
            Estado:{personaje.status}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to={"/"} type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Volver
            </Link>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>
    </div>
  )
}

export default Detail
