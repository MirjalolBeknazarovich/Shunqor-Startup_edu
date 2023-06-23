import { FieldHookConfig, useField, ErrorMessage } from "formik";
import { TextFieldProps } from "./text-field.props";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from "@chakra-ui/react";

const TextField = ({ label, placeholder, type, disabled, children, ...props }: TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(props);
    return (
        <FormControl isRequired isInvalid={! !meta.touched && ! !meta.error} mt={15}>
            <FormLabel>{ label }</FormLabel>
            <InputGroup>
                <Input focusBorderColor='facebook.500' placeholder={placeholder} h={14} type={type} disabled={disabled} { ...field } />
                { children }
            </InputGroup>
            <FormErrorMessage>
                <ErrorMessage name={field.name}></ErrorMessage>
            </FormErrorMessage>
        </FormControl>
    );
};

export default TextField;