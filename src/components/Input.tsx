import '../styles/Input.css';

interface InputProps {
  name: string;
  type: string;
  children: string;
  defaultValue: string;
  required: boolean;
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
        required={inputProps.required}
        type={inputProps.type}
        id={"supplier-" + inputProps.name.toLowerCase()}
        name={"supplier-" + inputProps.name.toLowerCase()}
        onChange={hasChange}
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