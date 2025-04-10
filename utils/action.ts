"use server";

import { headers } from 'next/headers';
import db from './db'
import { z } from 'zod'
import { ratelimitValidate } from './limiter';

const inputText = z.object({
    name: z.string().min(2, {
        message: "Input name more than 2 characters"
    }),
    email: z.string().min(4, {
        message: "Input email more than 4 characters"
    }),
    desc: z.string().min(4, {
        message: "Input description more than 4 characters"
    }),
})

const validateInput = (schema: any, data: any) => {
    const result = schema.safeParse(data)
    console.log(result.success)

    if (!result.success) {
        const errors = result.error?.errors.map((error: any) => error.message)
        throw new Error(errors.join(',\n'))
    }
    return result.data
}

export const InputContactToMe = async (prevState: any, formData: FormData) => {

    const headerList = headers()
    const ip = (await headerList).get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'

    try {

        await ratelimitValidate(ip)

        const nameInput = formData.get('name') as string
        const emailInput = formData.get('email') as string
        const descInput = formData.get('desc') as string
        
        const validateField = validateInput(inputText, {
            name: nameInput,
            email: emailInput,
            desc: descInput,
        })

        if (validateField) {
            await db.contactData.create({
                data: {
                    name: nameInput,
                    email: emailInput,
                    desc: descInput,
                }
            })
        }

        return { message: 'Submit Successfully!' }
    } catch (err: any) {
        console.log(err)
        return { message: err.message || "Error" }
    }
}