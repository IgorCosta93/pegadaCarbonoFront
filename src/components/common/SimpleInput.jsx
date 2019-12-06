import React from "react";
import formItemLayout from "../../const/form/formItemLayout";
import { Form, Input } from 'antd';

function SimpleInput({ data, setData, handleInput, label, required = true,
    inputName, placeholder, width,
}){
    return(
        <Form.Item 
            {...formItemLayout} 
            label={label} 
            style={{marginTop: 10}}
            hasFeedback
            required={required}
        >
            <Input 
                value={data[inputName]} 
                placeholder={placeholder}
                name={inputName}
                style={ (width ? width : { width: "60%" } ) }
                onChange={e => handleInput(e, data, setData)}
            />
        </Form.Item>
    )
}

export default SimpleInput;