import * as mockingUser from '../mocking/usersMocking.js';

//Ruta: GET '/mockingusers/:cant' Crea usuarios fake y los muestra en pantalla  --OK
export const generateUserMock = async (req, res) => {
    try{
        const cant  = req.params.cant ;
        //Comprobar si el parámetro está presente y es numérico
        if (!cant || Number.isNaN(Number(cant))) {
            return res.status(400).json({
            error: 'La cantidad no es válida. Debe ser un valor numérico.'
            });
        }
        const response = await mockingUser.generateUserMock (cant);
        res.status(201).json(response);
    }catch( error ){
        res.status(400).json({ error: error.message });
    }  
};

// RUTA: POST '/generatedata/users/:cant'  Crea usuarios fake y los guarda en la DB ---OK
export const createUserMock = async (req, res) => {
    try{
        const cant  = req.params.cant ;
        //Comprobar si el parámetro está presente y es numérico
        if (!cant || Number.isNaN(Number(cant))) {
            return res.status(400).json({
            error: 'La cantidad no es válida. Debe ser un valor numérico.'
            });
        }
        const response = await mockingUser.createUserMock (cant);
        res.status(201).json(response);
    }catch( error ){
        res.status(400).json({ error: error.message });

    }  
};

