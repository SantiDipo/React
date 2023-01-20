import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ personaje }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img width="100%" src={personaje.image} alt="imagen" />
                <h6 className="mb-0 text-success">{personaje.species}</h6>
                <h3 className="mb-0 text-dark">{personaje.name}</h3>
                <div className="card-body">
                    <p className="card-text">
                        Para más información precione en el boton detalles
                    </p>
                    <div className="d-flex justify-content-between align-items-center">

                        <Link to={`/details/${personaje.id}`}>
                            Detalles
                        </Link>

                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
