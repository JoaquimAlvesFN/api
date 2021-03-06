import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '@modules/users/services/CreateUserService';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import User from '@modules/users/infra/typeorm/entities/User';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    const userRepository = getRepository(User);
    
    const user = await userRepository.find();

    const newUser = user.map((users: any) => {
        return {
            name: users.name,
            email: users.email
        }
    })

    return response.json(newUser);
});

usersRouter.post('/', async (request, response) => {
    const {
        name,
        email,
        password
    } = request.body;

    const createUser = new CreateUserService();
    
    const user = await createUser.execute({
        name,
        email,
        password
    });

    return response.json(user);
});

usersRouter.post('/login', async (request, response) => {

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const {token} = await authenticateUser.execute({
        email,
        password
    });

    return response.json({token});

});

export default usersRouter;