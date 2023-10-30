import { FormInputLabel, Input, Group } from "../forminput/form-input.style"

function FormInput({ label, ...otherprops }) {
  return (
    <Group>
      <Input {...otherprops} />
      {label && (
        <FormInputLabel shrink={otherprops.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput