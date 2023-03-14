import { Link, useNavigate } from "react-router-dom";
import { 
    Box, 
    FormControl, 
    FormLabel, 
    Input, 
    Stack, 
    Button, 
    IconButton, 
    Text, 
    Image, 
    Flex, 
    Container,
    VStack,
    // FormErrorMessage, 
    Heading,
    Spacer,
    InputGroup, 
    InputRightElement,
    InputLeftAddon,
    Center,
    background, 
  } from '@chakra-ui/react';
import React, { useState } from "react";

import {
    MDBCol,
    MDBBtn,
    MDBInput,
    MDBTypography,
    MDBValidation,
    MDBValidationItem,
    MDBSpinner,
  } from "mdb-react-ui-kit";

export default function Onboarding() {
    const [isClickedFemale, setClickedFemale] = useState(false);
  
    const handleClickFemale = () => {
      setClickedFemale(!isClickedFemale);
    }

    // const activeColorOthers = isClickedOthers ? '#F0F0F0' : '#F9D88A';

    const [isClickedMale, setClickedMale] = useState(false);

    const handleClickMale = () => {
        setClickedMale(!isClickedMale);
      }

    const [isClickedOthers, setClickedOthers] = useState(false);

    const handleClickOthers = () => {
          setClickedOthers(!isClickedOthers);
        }
    return (
        <div>
            <VStack spacing='25px'>
                <Box w='1100px' h='40' bg='gray' px='2' alignItems='center' mt='25' display='flex'>
                    <text>progress bar</text>
                </Box>
            <Box w='1200px' h='80' bg='yellow' >
            {/* <Flex justify='center'> */}
                {/* <Box w='100%' h='40' bg='tomato'>
                    <Heading size='md'px='2'>Before we get started...</Heading>
                </Box>
                <Box w='100%' h='40' bg='green'>
                    <Heading size='md'px='2'>Before we get started...</Heading>
                </Box> */}
                <Heading size='md'>Before we get started...</Heading>
                <Text>Let’s set up your basic information! This helps us get to know you. ✍</Text>
                {/* <VStack>
                    <Box w='100%' h='40' flex='1' bg='tomato'>
                        <Heading size='md'>Before we get started...</Heading>
                    </Box> 
                    <Container maxW='550px' bg='purple' color='white'>
                        "550px" Container
                    </Container>
                    <Container maxW='container.sm' bg='green' color='#262626'>
                        "container.sm" Container
                    </Container>
                </VStack> */}
            {/* </Flex> */}
            </Box>
            <Box w='1200px' h='535' bg='green' mt='20'>
                <Flex>
                    <Box w='220px' h='278' bg='orange'>
                        <Flex direction='column'>
                        <Box mt='16'>
                            <Heading fontSize='18'>Profile Pictures</Heading>
                            <Text mt={2}>Images of yourself to be seen by others.</Text>
                        </Box>
                        <Spacer />
                        <Box mt='70'>
                            <Heading fontSize='18'>Personal Information</Heading>
                            <Text mt={2}>Provide information about yourself.</Text>
                        </Box>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box w='660px' h='519' bg='orange'>
                        <Flex direction='column'>
                        <Box h='140'>
                            images 
                        </Box>
                        <Spacer />
                        <Box mt='60'>
                            <Input 
                                placeholder='Display Name' 
                                w='610px' 
                                h='61' 
                                variant='filled'
                                borderRadius='12px' 
                                border='transparent' 
                                bg='#F0F0F0' 
                                fontSize='16px'
                                // focusBorderColor="transparent"
                            ></Input>

                            <Input 
                                placeholder='Full Name' 
                                w='610px'
                                h='61'
                                variant='filled'
                                borderRadius='12px'
                                border='transparent'
                                bg='#F0F0F0' 
                                fontSize='16px'
                                mt='24'
                                // focusBorderColor="transparent"
                            ></Input>

                            <Box w='630px'h='61' mt='24'>
                                <Flex direction='row' alignItems='center'>
                                <Text>Birthday</Text>
                                <Spacer />
                                <Input 
                                placeholder='Full Name' 
                                w='520px' 
                                h='40' 
                                variant='filled'
                                borderRadius='12px' 
                                border='transparent' 
                                bg='#F0F0F0' 
                                fontSize='16px'
                                type="date"
                                // focusBorderColor="transparent"
                                ></Input>
                                </Flex>
                            </Box>

                            <Box mt='24px' bg='yellow'>
                                <Flex direction='row' alignItems='center'>
                                <Text>Gender</Text>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='25px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    style={{backgroundColor: isClickedFemale ? '#F9D88A' : '#F0F0F0'}} 
                                    onClick={() => {handleClickFemale()}}
                                >
                                Female
                                </Box>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='12px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    style={{backgroundColor: isClickedMale ? '#F9D88A' : '#F0F0F0'}} 
                                    onClick={handleClickMale}
                                >
                                Male
                                </Box>
                                <Box
                                    as='button'
                                    borderRadius='12px'
                                    w='70px'
                                    h='40px'
                                    ml='12px'
                                    borderStyle={"solid"}
                                    border='transparent'
                                    // bg={{isClickedOthers ? '#F9D88A' : '#F0F0F0'}}
                                    _hover={{ bg: '#FCEDC9' }}
                                    // _active={{
                                    // //   bg: activeColorOthers,
                                    //   transform: 'scale(0.98)',
                                    // }}
                                    // style={{backgroundColor: isClickedOthers ? '#F9D88A' : '#F0F0F0'}} 
                                    onClick={handleClickOthers}
                                >
                                Others
                                </Box>
                                </Flex>
                            </Box>
                        </Box>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box w='250px' h='465' bg='orange'>
                        <Text fontSize='16px'>this is how others view your mini profile:</Text>
                    </Box>
                </Flex>
            </Box>
            </VStack>
        </div>
      );
}