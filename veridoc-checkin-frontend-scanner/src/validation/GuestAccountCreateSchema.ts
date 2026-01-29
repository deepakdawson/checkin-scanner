import z from 'zod';

const guestAccountCreateSchema = z.object({
    firstName: z.string().min(4, {
        message: 'Please enter first name'
    }),
    lastName: z.string().nullish(),
    email: z.email(),
    phoneCodeISO: z.string().nullish(),
    phoneNumber: z.string().max(15),
    address: z.string().nullish()
});

export default guestAccountCreateSchema;