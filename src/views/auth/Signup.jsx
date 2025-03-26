import React, { useState } from 'react'
import Content from '../../components/Content'
import Card, { CardBody, CardHeader } from '../../components/card/Card'
import CustomInput from '../../components/forms/CustomInput'
import CustomBtn from '../../components/button/CustomBtn'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/forms/PasswordInput'

const Signup = () => {
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
                    <CardHeader>Signup</CardHeader>
                    <CardBody>
                        <div className=" mb-7">
                            <CustomInput
                                style='customInputs'
                                title={`Fullname`}
                                type={`text`}
                                name={`fullname`}
                                value={credentials.fullname}
                                handleChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className=" mb-7">
                            <CustomInput
                                style='customInputs'
                                title={`Email`}
                                type={`email`}
                                name={`email`}
                                value={credentials.email}
                                handleChange={(e)=>handleChange(e)}
                            />
                        </div>
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
                        <div className=" mb-7">
                            <PasswordInput
                                style='customInputs'
                                title={`Confirm Password`}
                                type={`password`}
                                name={`confirmPassword`}
                                value={credentials.confirmPassword}
                                handleChange={(e)=>handleChange(e)}
                            />
                        </div>
                        <div className=" text-center mb-5">
                            <CustomBtn title={`Submit`} style={`bg-transparent px-5 text-lg shadow-sm shadow-[#999]`} handleClick={() => submit()}>
                                Submit
                            </CustomBtn>
                        </div>
                        <div className="">
                            <div className=" text-xs font-sans">
                                <span>Aleady have an account</span>
                                <Link to='/login' className=' text-sm text-red-600 ml-1 letter-spacing'>Login</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Content>
    )
}

export default Signup