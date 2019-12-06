import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout, PageHeader, Breadcrumb } from "antd";
const { Content } = Layout;

export const PublicRoute = ({
    component: Component,
    pathB: Path,
    ...rest
}) => {
    return(
        <Route
            {...rest}
            render={props => {
                return (
                    <Layout style={{ height: "100vh" }}>
                        <Layout>
                            <Layout style={{ padding: '34px 20px 20px', }}>

                                <Content 
                                    style={{
                                        background: '#fff', 
                                        padding: 24, 
                                        marginRight: 20, 
                                        marginLeft: 20, 
                                        marginBottom: 20, 
                                        minHeight: "auto" 
                                    }}
                                >
                                    <Component {...props}/>
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                );
            }}
        />
    )
}