import React, { Fragment } from "react";
import { Card, Form, Button, Select, Row, Divider, Typography } from 'antd';
import DescriptionItem from "../../common/DescriptionItem";
const { Title, Paragraph, Text } = Typography;

function Report({props}){
    if(props.data.students){
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
                <Fragment>
                    <Title level={4}>Relatório dos alunos que usaram a calculadora C02</Title>

                    <Divider/>

                    {props.data.students.map((s, i) => {
                        return(
                            <Fragment key={i}>
                                <Row>
                                    <DescriptionItem 
                                        title="Nome" 
                                        content={s.name} 
                                    />
                                </Row>
                                <Row>
                                    <DescriptionItem 
                                        title="RA" 
                                        content={s.ra} 
                                    />
                                </Row>
                                <Row>
                                    <DescriptionItem 
                                        title="CO2" 
                                        content={s.questions_info && s.questions_info[0].total.toFixed(2)} 
                                    />
                                </Row>
                                <Row>
                                    <DescriptionItem 
                                        title="Plantio" 
                                        content={s.questions_info && s.questions_info[0].trees} 
                                    />
                                </Row>

                                <Divider />
                            </Fragment>
                        )
                    })}
                </Fragment>
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
                <Fragment>
                    <Title level={4}>Relatório dos alunos que usaram a calculadora C02</Title>
                </Fragment>
            </Card>
        )
    }
}

export default Report; 