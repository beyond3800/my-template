import React, { useState } from 'react'
import Content from '../../components/Content'
import Card, { CardBody, CardHeader } from '../../components/card/Card'
import CustomInput from '../../components/forms/CustomInput'
import CustomBtn from '../../components/button/CustomBtn'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/forms/PasswordInput'

const Login = () => {
    const [credentials, setCredentials] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const submit = () => {
        console.log(credentials)
    }
    return (
        <Content>
            <div className=" pt-10">
                <Card style={`w-[400px]`}>
                    <CardHeader> Login</CardHeader>
                    <CardBody>
                        <div className=" mb-7">
                            <CustomInput
                                style='customInputs'
                                title={`Username`}
                                type={`text`}
                                name={`username`}
                                value={credentials.username}
                                handleChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className=" mb-7">
                            <PasswordInput
                                style='customInputs'
                                title={`Password`}
                                type={`password`}
                                name={`password`}
                                value={credentials.password}
                                handleChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className=" text-center mb-5">
                            <CustomBtn style={`bg-transparent px-5 text-lg shadow-sm shadow-[#999]`} handleClick={() => submit()}>
                                Login
                            </CustomBtn>
                        </div>
                        <div className="">
                            <div className=" text-xs font-sans">
                                <span>Don't have an account yet</span>
                                <Link to='/signup' className=' text-sm text-red-600 ml-1 letter-spacing'>Register</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Content>
    )
}

export default Login