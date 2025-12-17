import { faker as fakerES_MX } from "@faker-js/faker";

const ADOPTED = [true, false];

export const generatePet = () => {
    return{
        name: fakerES_MX.animal.petName(),
        specie: fakerES_MX.animal.dog() ,
        birthDate: (fakerES_MX.date.birthdate().toISOString().split('T')[0]),
        adopted: fakerES_MX.helpers.arrayElement(ADOPTED),
        image: fakerES_MX.image.url()
    }
};

export const generatePetId = (ids) => {
    return{
        name: fakerES_MX.animal.petName(),
        specie: fakerES_MX.animal.dog() ,
        birthDate: (fakerES_MX.date.birthdate().toISOString().split('T')[0]),
        adopted: fakerES_MX.helpers.arrayElement(ADOPTED),
        owner:fakerES_MX.helpers.arrayElement(ids),
        image: fakerES_MX.image.url()
    }
};

