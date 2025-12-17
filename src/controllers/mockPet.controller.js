import * as mockingPet from '../mocking/petsMocking.js';

//Ruta: GET '/mockingpets/:cant'  Crea mascotas fake y los muestra en pantalla  --OK
export const generatePetMock = async (req, res) => {
    try{
        const cant  = req.params.cant ;
        //Comprobar si el parámetro está presente y es numérico
        if (!cant || Number.isNaN(Number(cant))) {
            return res.status(400).json({
            error: 'La cantidad no es válida. Debe ser un valor numérico.'
            });
        }
        const response = await mockingPet.generatePetMock (cant);
        res.status(201).json(response);
    }catch( error ){
        res.status(400).json({ error: error.message });
    }  
};

///RUTA: POST '/generatedata/pets/:cant'  Crea mascotas fake y los muestra en pantalla  --OK
export const createPetMock = async (req, res) => {
    try{
        const cant  = req.params.cant ;
        //Comprobar si el parámetro está presente y es numérico
        if (!cant || Number.isNaN(Number(cant))) {
            return res.status(400).json({
            error: 'La cantidad no es válida. Debe ser un valor numérico.'
            });
        }
        const response = await mockingPet.createPetMock (cant);
        res.status(201).json(response);
    }catch( error ){
        res.status(400).json({ error: error.message });

    }  
};

