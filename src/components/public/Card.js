import React from 'react'

export const Card = ({personaje}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img width="100%" src={personaje.image} alt="imagen" />
                <h6 className="mb-0 text-success">{personaje.species}</h6>
                <h3 className="mb-0 text-dark">{personaje.name}</h3>
                <div className="card-body">
                    <p className="card-text">
                        Sexo:{personaje.gender}
                        <br/>
                        Origen:{personaje.origin.name}
                        <br/>
                        Estado:{personaje.status}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
