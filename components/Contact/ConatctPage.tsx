'use client'

import FormShow from "./FormShow"
import { Toaster } from 'sonner'


const ConatctPage = () => {
    return (
        <div className="w-full pt-36 pb-20">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full text-center flex flex-col items-center">
                    <span className="text-2xl">Connect With Me</span>
                    <span className="text-5xl font-bold py-1">Get in touch</span>
                    <p className="textFormat">
                    You can leave a review about my website or give me feedback on what I need to improve to learn and improve in the future.
                    </p>
                </div>
                <FormShow />
            </div>
            <Toaster richColors />
        </div>
    )
}
export default ConatctPage