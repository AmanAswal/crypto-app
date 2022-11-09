import {
  Image,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import btcSrc from "../assets/btc.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Center p={4} minHeight="70vh">
          <VStack>
            <Heading size="2xl" mb={4}>
              <span style={{color: "#0E5E6F"}}>Crypto</span>nium
            </Heading>
            <motion.div
              style={{
                height: "35vh",
              }}
              animate={{
                translateY: "20px",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                w={"full"}
                h={"full"}
                objectFit={"contain"}
                src={btcSrc}
                filter={"grayscale(1)"}
              />
            </motion.div>


            <Container maxW="container.md" textAlign="center">
              <Heading size="2xl" mb={4}>
                Best Partner For Learn and Buy or Sell Cryptocurrency
              </Heading>

              <Text fontSize="xl" color="gray.500">
                Get real time monitoring cryptocurrency and get started trading cryptocurrency instantly and easily
              </Text>

            </Container>
          </VStack>
        </Center>
      </Container>

      <Footer />
    </>
  );
};

export default Home;