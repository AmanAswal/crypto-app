import { Box, HStack, Button, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <Box h={"10"} px={"16"} py={["16", "14"]}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={"center"}>
          <Text fontWeight={"bold"}>Made by - <b>Aman Aswal</b> </Text>
          
          <HStack>
            <Button size={"xs"} variant={"outline"} leftIcon={<FaLinkedin />}>
              <a href="https://www.linkedin.com/in/amanaswal/" target="_blank" rel="noreferrer">linkedin</a>
            </Button>
            <Button size={"xs"} variant={"outline"} leftIcon={<FaGithub />}>
              <a href="https://github.com/AmanAswal" target="_blank" rel="noreferrer">github</a>
            </Button>
          </HStack>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer