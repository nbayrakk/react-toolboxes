import React from 'react'
const Input = ({ type, value, placeholder, error, onChange, name, label }) => {
    return (
        <div style={{padding:"0 0 0.75rem 0"}} className="form-group row">
            <label  htmlFor={name} className="col-sm-3 col-form-label"> {label} </label>
            <div className="col-sm-8">
                <input name={name} value={value} type={type} placeholder={placeholder}
                 className="form-control" onChange={onChange} >
                </input>

                {error && 
                <div className="invalid-feeback">
                    {error}
                </div>}
            </div>
        </div>
    )
}
export default Input