import { faker as fakerES_MX } from "@faker-js/faker";
import { createHash } from "../../utils/index.js";

const ROLES = ['user', 'admin'];
const password = 'coder123';
const hashedPassword = await createHash(password);

export const generateUser = () => {
    return{
        first_name: fakerES_MX.person.firstName(),
        last_name: fakerES_MX.person.lastName(),
        email: fakerES_MX.internet.email(),
        password: hashedPassword,
        role: fakerES_MX.helpers.arrayElement(ROLES)
    }
};

