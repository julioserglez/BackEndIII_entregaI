import userModel from "../dao/models/User.js";
import { petsService } from "../services/index.js";
import { generatePet, generatePetId } from './utils/petMock.js';

// RUTA: GET '/mockingusers/pets/:cant'  Crea mascotas fake y los muestra en pantalla ---OK
export const generatePetMock = async (cant) => {
    try{
        const pets = [];
        for( let i=0; i<cant; i++ ){
            const pet = generatePet();
            pets.push(pet);
        }
        return pets;
    }catch( error ){
        throw new Error(error);
    }  
};

///RUTA: POST '/generatedata/pets/:cant' Crea mascotas fake y las guarda en la DB ---OK
export const createPetMock = async (cant) => {
    try{
        const pets = [];
        const users = await userModel.find({}).select('_id').lean();
        if (users.length === 0) {
            numUser = 0;
            console.log('No hay usuarios. Por favor, agregue algunos primero.');
            throw new Error("No hay usuarios en la base de datos");
        }else{
            numUser= users.length;
        }

        const usersIds = users.map(user => user._id);
        for (let i = 1; i <= cant; i++) {
            const pet = generatePetId(usersIds);
            pets.push({
                name: pet.name, 
                specie: pet.specie,
                birthDate: pet.birthDate,
                adopted: pet.adopted,
                owner: pet.owner,
                image: pet.image
            });
        }
        const result = await petsService.create(pets);
        return result;
    }catch( error ){
        throw new Error(error);
    }  
};

