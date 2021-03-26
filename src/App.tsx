import React, { useState } from 'react'
import { Button, Container, Wrap, WrapItem, Center } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrap spacing='30px'>
      <WrapItem>
        <Center w='180px' h='80px' bg='red.200'>
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='green.200'>
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='tomato'>
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blue.200'>
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w='180px' h='80px' bg='blackAlpha.500'>
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export default App
