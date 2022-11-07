import { Container } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index';
import Loader from './Loader';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchExchanges = async() => {
      const {data} = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    }
    fetchExchanges();
  }, [])
  
  
  return (
    <Container maxW="container.xl">
      {loading ? <Loader /> : <></>}
    </Container>
  )
}

export default Exchanges