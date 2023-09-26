import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {

    // useEffect(() => {
    //     setIsopen(true)
    // }, [])
    // const [isopen, setIsopen] = useState(false)

    const loginn = async () => {
        console.log('loggss')
        let result = await fetch('http://localhost:8080/auth/google')
        // result=await result.json()
        // console.log('hello',result)
        // result=await result.json()
        // if(result){
        // console.log(result)
        // }else{
        //     console.log('Something Went wrong')
        // }
    }

    return (
        <div>
            <div className="container p-3 text-center" style={{ width: "40vw", minWidth: "450px" }}>
                <h1 className="text-center">Login Page</h1>
                <Form.Control type="text" placeholder="Email" className="m-2"></Form.Control>
                <Form.Control type="text" placeholder="Password" className="m-2"></Form.Control>
                {/* <br></br> */}
                <a href="#" className="link"> Don't have any account ? </a><br /><br />
                <a href="http://localhost:8080/auth/google" className="btn btn-primary">Google login</a>&nbsp;
                <Button variant="primary"   >
                    Login
                </Button>

            </div>





        </div>
    )
}


export default Login;