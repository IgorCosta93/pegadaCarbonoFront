import React, { useState, Fragment } from "react";
import { Card, Form, Button, Select, Row, Input, Checkbox, Alert, Typography } from 'antd';
import { compose, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { addQuestionsM } from '../../../graphql/mutation/questions';
//import { handleInput } from "./handleInput";
import routes from "../../../const/routes";
const { Title, Paragraph, Text } = Typography;
const Option = Select.Option;

const fuelType = [
    [
        { name: "Pequeno até 1.4", value: 2.184 },
        { name: "Médio de 1.5 até 2.0", value: 2.579 },
        { name: "Grande maior que 2.0", value: 3.571 },
        { name: "Motocicleta", value: 1.268 },
    ],
    [
        { name: "Pequeno até 1.4", value: 0.719 },
        { name: "Médio de 1.5 até 2.0", value: 1.114 },
        { name: "Grande maior que 2.0", value: 2.106 },
        { name: "Motocicleta", value: 0.521 },
    ],
    [
        { name: "Grande maior que 2.0", value: 3.128 }
    ]
];

function Questions({props, addQuestions}){
    let [ form, setForm ] = useState({
        fuel: 0,
        question1Select: 0,
        question1Value: 0,
        question2: 0,
        suportBlock: false,
        block: false,
        question3: 0,
        question4: 0,
        question4: 0,
        question5: 0,
        question6: 0,
        question7: 0,
        total: 0,
        trees: 0
    });
    let [ finish, setFinish ] = useState(false);

    function saveQuestions(){
        //SOMA O TOTAL DOS VALORES LEVANTADOS
        let total = form.question1 + form.question4 + form.question5 + form.question6 + form.question7;
        setForm(form = {...form, total: total});
        //CALCULA QUANTAS ARVORES SERÃO PLANTADAS
        setForm(form = {...form, trees: parseFloat((form.total.toFixed(2)*7.14).toFixed(0)) });
        setFinish(finish = true);

        let body = {
            form,
            addQuestions
        };

        props.ADD_QUESTIONS(body);
    }

    if(finish){
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
                <Alert 
                    message={
                        <Fragment>
                            <Title level={4}>Obrigado por calcular sua pegada do carbono</Title>

                            <div style={{ marginTop: 25, marginLeft: "auto", marginRight: "auto" }}>
                                <h3>Toneladas de C02</h3>
                                <p>{form.total.toFixed(2)}</p>
                            </div>

                            <div style={{ marginTop: 25, marginLeft: "auto", marginRight: "auto" }}>
                                <h3>Arvores necessarias para compensação</h3>
                                <p>{form.trees}</p>
                            </div>

                        </Fragment>
                    } 
                    type="success" 
                />

                <Link to={routes.HOME}>
                    <Button type="link">Voltar Ao Inicio</Button>
                </Link>
            </Card>
        )
    }else{
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
                <Row style={{marginTop: 30}}>
                    <p>1-  Qual o tipo de combustível é consumido pelo o seu veiculo ?</p>
                </Row>
                <Row>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Selecione o tipo do veiculo"
                        optionFilterProp="children"
                        onChange={e => setForm(form = {...form, fuel: e})}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option key="1" value={0}>Gasolina</Option>
                        <Option key="2" value={1}>Etanol</Option>
                        <Option key="3" value={2}>Gás</Option>
                    </Select>
                </Row>
    
                <Row style={{marginTop: 30}}>
                    <p>2-  Que tipo de veiculo você utiliza para ir para a faculdade ?</p>
                </Row>
                <Row>
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Selecione o tipo do veiculo"
                        optionFilterProp="children"
                        onChange={e => setForm(form = {...form, question1Select: e})}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        {fuelType[form.fuel].map(f => {
                            return(
                                <Option key={f.name} value={f.value}>{f.name}</Option>
                            )
                        })}
                    </Select>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Input 
                        placeholder={"Digite a distância"}
                        name={"question1Value"}
                        style={{ width: "100%" }}
                        onChange={(e) => 
                            setForm(form = {...form, 
                                //CALCULO DO COMBUSTIVES
                                question1: (form.question1Select*parseFloat(e.target.value))/1000
                            })
                        }
                    />
                </Row>
    
                <Row style={{marginTop: 30}}>
                    <p>3- Qual bloco é ministrada sua aula ?</p>
                </Row>
                <Row>
                    <Checkbox 
                        value={form.suportBlock} 
                        onChange={() => setForm(form = {...form, suportBlock: !form.suportBlock})}
                    >
                        Apoio
                    </Checkbox>
                    <Checkbox 
                        value={form.block} 
                        onChange={() => setForm(form = {...form, block: !form.block})}
                    >
                        Bloco
                    </Checkbox>
                </Row>
    
                {
                    form.suportBlock ?
                        <Fragment>
                            <Row style={{marginTop: 30}}>
                                <p>4-  Quantas aulas você tem no apoio ?</p>
                            </Row>
                            <Row>
                                <Input  
                                    placeholder={"Digite o valor"}
                                    name={"question4Value"}
                                    style={{ width: "100%" }}
                                    onChange={(e) => 
                                        setForm(form = {...form, 
                                            //CALCULO COM BASE NAS AULAS DE APOIO
                                            question4: (1.475*parseFloat(e.target.value))
                                        })
                                    }
                                />
                            </Row>
                        </Fragment>
                    : null
                }
    
                {
                    form.block ?
                        <Fragment>
                            <Row style={{marginTop: 30}}>
                                <p>5 - Quantas aulas você tem no bloco ?</p>
                            </Row>
                            <Row>
                                <Input  
                                    placeholder={"Digite o valor"}
                                    name={"question5Value"}
                                    style={{ width: "100%" }}
                                    onChange={(e) => 
                                        setForm(form = {...form, 
                                            //CALCULO COM BASE NAS AULAS DE BLOCO
                                            question5: (0.295*parseFloat(e.target.value))
                                        })
                                    }
                                />
                            </Row>
                        </Fragment>
                    : null
                }
    
                {
                    form.suportBlock ?
                        <Fragment>
                            <Row style={{marginTop: 30}}>
                                <p>6 - Quanto alunos em média tem no apoio ?</p>
                            </Row>
                            <Row>
                                <Input  
                                    placeholder={"Digite o valor"}
                                    name={"question6Value"}
                                    style={{ width: "100%" }}
                                    onChange={(e) => 
                                        setForm(form = {...form, 
                                            //CALCULO COM O RESULTADO DA PERGUNTA 4
                                            question6: (form.question4/parseFloat(e.target.value))
                                        })
                                    }
                                />
                            </Row>
                        </Fragment>
                    : null
                }
    
                {
                    form.block ?
                        <Fragment>
                            <Row style={{marginTop: 30}}>
                                <p>7 - Quanto alunos em média tem no bloco ?</p>
                            </Row>
                            <Row>
                                <Input  
                                    placeholder={"Digite o valor"}
                                    name={"question7Value"}
                                    style={{ width: "100%" }}
                                    onChange={(e) => 
                                        setForm(form = {...form, 
                                            //CALCULO COM O RESULTADO DA PERGUNTA 5
                                            question7: (form.question5/parseFloat(e.target.value))
                                        })
                                    }
                                />
                            </Row>
                        </Fragment>
                    : null
                }
    
                <Form.Item style={{marginTop: "30px", marginLeft:"40%", display:"float"}}>
                    <Button 
                        type="primary" 
                        icon="save"
                        onClick={() => saveQuestions()}
                        style={{width: "40%"}}
                    >
                        {"Registrar"}
                    </Button> 
                </Form.Item>
    
            </Card>
        )
    }
}

export default compose(
    graphql(addQuestionsM, { name: "addQuestions" })    
)(Questions);