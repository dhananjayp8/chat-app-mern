import React from 'react'
import { Container,Box,Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const HomePage = () => {
  return<Container maxW='xl' centerContent>
    <Box
    d='flex'
    justifyContent="center"
    p={3}
    bg={"white"}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="1g"
    borderWidth="1px"
    >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black" textAlign="center">WeChat</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
    <Tabs  variant="soft-rounded">
    <TabList mb="1em">
      <Tab width="50%">Login</Tab>
      <Tab width="50%">Sign Up</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
       <Login/>
      </TabPanel>
      <TabPanel>
        <Signup/>
      </TabPanel>
    </TabPanels>
  </Tabs>
    </Box>
  </Container>
}

export default HomePage