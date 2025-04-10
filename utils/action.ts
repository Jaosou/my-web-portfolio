"use server";

import { error } from 'console';
import db from './db'
import { z } from 'zod'

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

    try {
        const name = formData.get('name')
        const email = formData.get('email')
        const desc = formData.get('desc')
        
        const validateField = validateInput(inputText, {
            name: name,
            email: email,
            desc: desc,
        })
        console.log(validateField)
        // console.log(validateField.name)
        // console.log(validateField.email)
        // console.log(validateField.desc)

        // console.log(desc)
        // console.log(lastName)
        // console.log(fristName)

        if (validateField) {
            await db.contactData.create({
                data: {
                    name: name,
                    email: email,
                    desc: desc,
                }
            })
        }

        return { message: 'Submit Successfully!' }
    } catch (err: any) {
        console.log(err)
        return { message: err.message || "Error" }
    }
}