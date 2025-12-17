import { generateUser } from './utils/userMock.js';
import { usersService } from "../services/index.js";

// RUTA: GET '/mockingusers/users/:cant'  Crea usuarios fake y los muestra en pantalla ---OK
export const generateUserMock = async (cant) => {
    try{
        const users = [];
        for( let i=0; i<cant; i++ ){
            const user = generateUser();
            users.push(user);
        }
        return users;
    }catch( error ){
        throw new Error(error);
    }  
};

// RUTA: POST '/generatedata/users/:cant'  Crea usuarios fake y los guarda en la DB ---OK
export const createUserMock = async (cant) => {
    try{
        const users = [];
        for( let i=1; i<=cant; i++ ){
            const user = generateUser();
            users.push(user);
        }
        const result = await usersService.create(users);
        return result;
    } catch ( error ){
        throw new Error(error);
    }  
};

