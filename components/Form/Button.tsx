'use client'
import { type } from 'os'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from 'lucide-react';
import { ArrowRightFromLine } from 'lucide-react';

type btnSize = 'default' | 'lg' | 'sm'

type type = 'submit' | 'reset' | 'button'

type FormButton = {
    className?: string
    type: type
    text: string
    size?: btnSize
}

export const SummitButton = (props: FormButton) => {

    const status = useFormStatus()
    const { className, type, text, size } = props;

    return (
        <Button
            className={`${className}`}
            size={size}
            type={type}>

            {
                status.pending
                    ? <LoaderCircle className=' animate-spin' />
                    : <p className='flex items-center'><ArrowRightFromLine 
                    className='mr-4 text-xl '/>  {text}</p>
            }

        </Button>
    )
}