import React, { useState } from "react";
import { Card, Form, Button } from 'antd';
import { compose, graphql } from 'react-apollo';
import { addStudentM } from '../../../graphql/mutation/student';
import { handleInput } from "./handleInput";
import SimpleInput from "../../common/SimpleInput";
import { validForm } from "../../../functions/validForm";
import { openNotificationWithIcon } from "../../common/Notification";

function Home({props, addStudent}){
    let [ student, setStudent ] = useState({
        name: undefined,
        email: undefined,
        ra: undefined
    });
    let [ loading, setLoading ] = useState(false);

    function saveStudent(){
        if(!validForm(student)){
            openNotificationWithIcon(
                'warning', "Aviso", 
                "Há informações incompletas no cadastro.", "", 5
            );
            return 
        };

        let body = {
            student,
            addStudent
        };

        props.ADD_STUDENT(body);

        setLoading(loading = true);
        setTimeout(() => {
            props.history.push("/perguntas");
            setLoading(loading = false);
        }, 2000)
        openNotificationWithIcon('success', "Sucesso", "Estudante salvo com sucesso.", "", 2);
    }

    return(
        <Card
            style={{ width: "70%", marginTop: 25, marginLeft: "auto", marginRight: "auto" }}
            cover={
                <img 
                    alt="example" 
                    src={require("../../../img/logo.png")} 
                    style={{
                        height: 200, 
                        width: 250, 
                        marginLeft: "auto", 
                        marginRight: "auto",
                        marginTop: 20
                    }}
                />
            }
            className="cardLogin"
        >
            <SimpleInput
                data={student} 
                setData={setStudent}
                handleInput={handleInput} 
                label={"Nome"} 
                inputName={"name"}
                placeholder={"Digite seu nome"} 
                width={{ width: "90%" }}
            />

            <SimpleInput
                data={student} 
                setData={setStudent}
                handleInput={handleInput} 
                label={"Email"} 
                inputName={"email"}
                placeholder={"Digite seu email"} 
                width={{ width: "90%" }}
            />

            <SimpleInput
                data={student} 
                setData={setStudent}
                handleInput={handleInput} 
                label={"RA"} 
                inputName={"ra"}
                placeholder={"Digite seu RA"} 
                width={{ width: "90%" }}
            />

            <Form.Item style={{marginTop: "30px", marginLeft:"40%", display:"float"}}>
                <Button 
                    type="primary" 
                    icon="play-circle"
                    loading={loading} 
                    onClick={() => saveStudent()}
                    style={{width: "40%"}}
                >
                    {"Começar"}
                </Button> 
            </Form.Item>

        </Card>
    )
}

export default compose(
    graphql(addStudentM, { name: "addStudent" })    
)(Home);