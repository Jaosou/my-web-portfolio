import { SummitButton } from '../Form/Button'
import FormContainner from '../Form/FormContainner'
import FormInput from '../Form/formInput'
import { InputContactToMe } from '@/utils/action'
import { Textarea } from '../ui/textarea'


const FormShow = () => {

    return (
        <section className='bgContactCard'>
            <FormContainner action={InputContactToMe}>

                <div className='w-full grid grid-cols-2 gap-4 pt-2'>
                    <FormInput name="name"
                        label="Name"
                        type="text"
                        placeholder='Name'
                        defaultValue=''
                        className='h-16' />

                    <FormInput name="email"
                        label="Email"
                        type="text"
                        placeholder='Email'
                        defaultValue=''
                        className='h-16' />
                </div>


                <div className='w-full py-4'>
                    <label htmlFor="desc" className='labelContact'>Description</label>
                    <Textarea
                    name='desc'
                        placeholder='Description'
                        defaultValue=''
                        className='h-40 my-2' />
                </div>


                <div className='w-full text-center h-12'>
                    <SummitButton className='SubmitBtn' type='submit' text='Submit' size="default" />
                </div>


            </FormContainner>
        </section>
    )
}
export default FormShow