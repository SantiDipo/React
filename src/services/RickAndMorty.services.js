
import { API_RM } from './../constants/Api.constants';
class RickAndMortyService {

    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        //INTERCEPTOR
        return response.json();
    }

    async getAllCharactersById(id) {
        const response = await fetch(API_RM.CHARACTERS_BY_ID(id));
        //INTERCEPTOR
        return response.json();
    }
}

export default new RickAndMortyService();