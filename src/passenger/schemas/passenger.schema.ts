import z from 'zod';

export const passengerSchema = z.object({
  nroPassport: z.string().min(8).max(8),
  name: z.string().min(2).max(99),
  surname: z.string().min(2).max(99),
  birthDate: z.string({
    invalid_type_error: 'Birth date must be a date',
    required_error: 'Birth date is required',
  }),
  gender: z.enum(['male', 'female']),
  email: z.string().email(),
  celphone: z.string().min(5).max(25),
  createdBy: z.string().min(2).max(255),
});

export function validatePassenger(data: any) {
  return passengerSchema.safeParse(data);
}

export function validatePartialPassenger(data: any) {
  return passengerSchema.partial().safeParse(data);
}
