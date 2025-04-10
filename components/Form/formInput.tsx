import { Label } from "../ui/label"
import { Input } from "../ui/input"

type FormInputProps = {
    name: string
    type: string
    label: string
    defaultValue?: string
    placeholder?: string
    className?: string
}

const FormInput = (props: FormInputProps) => {

    const { name, type, label, defaultValue, placeholder,className } = props;
    return (
        <div className="pb-2" data-error = "error">
            <Label className="labelContact" htmlFor={name}>{label}</Label>
            <Input placeholder={placeholder}
                name={name}
                type={type}
                defaultValue={defaultValue}
                className={className}>
            </Input>
        </div>
    )
}
export default FormInput