import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ToggleColorMode from './ToggleColorMode'

const Header = () => {
  return (
    <HStack p="4" shadow="base">
      <ButtonGroup variant='unstyled' spacing='4'>
        <Button>
          <Link to="/">Home</Link>
        </Button>

        <Button>
          <Link to="/exchanges">Exchanges</Link>
        </Button>

        <Button>
          <Link to="/coins">Coins</Link>
        </Button>
      </ButtonGroup>


      <ToggleColorMode />
    </HStack>
  )
}

export default Header