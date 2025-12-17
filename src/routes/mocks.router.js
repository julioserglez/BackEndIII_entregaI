import * as userController from '../controllers/mockUser.controller.js';
import * as petController from '../controllers/mockPet.controller.js';
import { Router } from 'express';
const router = Router();

/// -----------Rutas para generar Mocks de Usuarios------------///
/// Genera usuarios fake y los muestra en pantalla
router.get('/mockingusers/:cant', userController.generateUserMock );
//  Genera usuarios fakes y guarda en la BD
router.post('/generatedata/users/:cant', userController.createUserMock );


/// -----------Rutas para generar Mocks de Mascotas---------------///
// Genera mascotas fakes y muestra en pantalla
router.get('/mockingpets/:cant', petController.generatePetMock ); 
// Genera mascotas mascotas fakes y guarda en la BD
router.post('/generatedata/pets/:cant', petController.createPetMock );

export default router;

