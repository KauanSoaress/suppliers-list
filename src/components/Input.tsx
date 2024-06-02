interface InputProps {
  name: string;
  children: string;
  defaultValue: string;
  handleChange(fieldToChange: string): void;
}

export const Input = (inputProps: InputProps) => {

  const hasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.currentTarget.value;
    inputProps.handleChange(el);
  }

  return (
    <>
      <label htmlFor="supplier-name">{inputProps.children}</label>
      <input
        required 
        type="text" 
        id={"supplier-" + inputProps.name.toLowerCase()}
        name={"supplier-" + inputProps.name.toLowerCase()}
        onBlur={hasChange}
        defaultValue={inputProps.defaultValue}
        placeholder={
          inputProps.children === "Categoria" 
          ?
          'Digite sua ' + inputProps.children.toLowerCase() + "..."
          :
          'Digite seu ' + inputProps.children.toLowerCase() + "..."
        }
      />
    </>
  )
}