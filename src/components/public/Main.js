import React, { Component } from 'react'
import RickAndMortyServices from '../../services/RickAndMorty.services';
import { Cards } from './Cards';

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { personajes: [] }
  }

  componentDidMount() {
    // RickAndMortyServices.getAllCharacters()
    //   .then((data) => this.setState({ personajes: data.results }))
    //   .catch((error) => console.log(error));
  }
  render() {

    return (
      <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="mb-0 text-dark">Album del personajes de Rick y Morty</h1>
              <p className="lead text-muted">Aqui podras conocer a algunos de los personajes mas importantes de Rick y Morty. Su estado actual, nombre o si esta vivo son algunas de sus carateristicas</p>
              <p>
                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>

        <Cards />

      </main>
    )
  }
}

export default Main