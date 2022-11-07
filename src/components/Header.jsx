import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ToggleColorMode from './ToggleColorMode'

const Header = () => {
  return (
    <HStack p="4" shadow="base">
        <Button variant="unstyled">
            <Link to="/">Home</Link> 
        </Button>
        
        <Button variant="unstyled">
            <Link to="/exchanges">Exchanges</Link> 
        </Button>
        
        <Button variant="unstyled">
            <Link to="/coins">Coins</Link> 
        </Button>

        <ToggleColorMode />
    </HStack>
  )
}

export default Header