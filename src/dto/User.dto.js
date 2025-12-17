export default class UserDTO {
    static getPetInputFrom = (user) =>{
        return {
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            email: user.email,
            password: user.password
        }
    }
}