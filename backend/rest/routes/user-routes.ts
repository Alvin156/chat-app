import { Router } from 'express';

export const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await deps.users.getByEmail(email);

    if (!user) {
        res.status(404).json({ message: 'Invalid Email.' });
        return;
    }

    const validPassword = await deps.users.validatePassword(user, password);
    if (!validPassword) {
        res.status(400).json({ message: 'Invalid password.' });
        return;
    }

    (req as any).user = await deps.users.secure(user);

    res.status(201).json({ token: await deps.users.createToken(user) });
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    const user = await deps.users.createUser({
        name,
        email,
        password,
    });

    (req as any).user = await deps.users.secure(user);

    res.status(201).json({ token: await deps.users.createToken(user) });
});
