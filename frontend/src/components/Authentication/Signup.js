import React,{useState} from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, InputGroup, VStack,InputRightElement,Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [confirmpassword,setConfirmpassword]=useState();
    const [password,setPassword]=useState();
   // const [loading,setLoading]=useState(false);
    const toast=useToast();
    const navigate=useNavigate();

    const handleClick=()=>{
           setShow(!show);
    }
    const submitHandler=async()=>{
         //setLoading(true);
         if(!name || !email || !password ||!confirmpassword){
            toast({
                title:"Please fill all the Fields",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",
            })
            //setLoading(false);
            return;
         }
         try{
           const config={
            headers:{
                "Content-type":"application/json",
            },
           };
           const {data}=await axios.post("/api/user",{name,email,password},config);
           toast({
            title: "Registration Successful",
            status:"Success",
            duration:5000,
            isClosable:true,
            position:"bottom",
           });
           localStorage.setItem("userInfo",JSON.stringify(data));
           //setLoading(false);
           navigate('/chats')
         }catch(error){
            toast({
                title: "Error occured",
                description:error.response.data.message,
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom",
               });
         }
    };
  return (
    <VStack spacing='5px' color='black'>

        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Enter your Name'
            onChange={(e)=>setName(e.target.value)}
            />
            
        </FormControl>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter your Email'
             onChange={(e)=>setEmail(e.target.value)}
            />
           
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input type={show ?"text":"password"} placeholder='Enter your Password'
            onChange={(e)=>setPassword(e.target.value)
            }
             
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {
                    show?"Hide":"Show"
                  }  
                </Button>
            </InputRightElement>
            </InputGroup>
            
            
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input type={show ?"text":"password"} placeholder='Confirm Password'
            onChange={(e)=>setConfirmpassword(e.target.value)
            }
             
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {
                    show?"Hide":"Show"
                  }  
                </Button>
            </InputRightElement>
            </InputGroup>
            
            
        </FormControl>
        {/* <FormControl id='pic' isRequired>
            <FormLabel>Upload your picture</FormLabel>   
            <Input type="file" p={1.5} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])}
             />
                 
        </FormControl> */}
  
         
         <Button colorScheme='blue' width="100%" style={{marginTop:15}} 
         onClick={submitHandler}
         >
           Sign Up
         </Button>


    </VStack>
  )
}

export default Signup