import React from 'react'

const FormInput = ({label,type,name,value,onInput,span,id,placeholder,className,disabled,pattern,datatestid}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onInput={onInput} id={id} data-testid={datatestid} placeholder={placeholder} className={className} disabled={disabled} pattern={pattern} required/>
      <span>{span}</span>
    </div>
  )
}

export default FormInput