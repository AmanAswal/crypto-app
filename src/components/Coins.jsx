import React, { useEffect, useState } from 'react'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios'
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  // pagination array
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) {
    return <ErrorComponent message={"Error While Fetching API Data"} />
  }

  return (
    <Container maxW="container.xl">
      {loading ? <Loader /> : <>

        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>₹ INR</Radio>
            <Radio value={"usd"}>$ USD</Radio>
            <Radio value={"eur"}>€ EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap="wrap" justifyContent={"space-evenly"}>
          {
            coins.map((item) => (
              <CoinCard key={item.id} id={item.id} name={item.name} price={item.current_price} img={item.image} symbol={item.symbol} currencySymbol={currencySymbol} />
            ))
          }
        </HStack>

        {/* pagination */}
        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {btns.map((item, index) => (
            <Button key={index} onClick={() => changePage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </HStack>
      </>}
    </Container>
  )
}

export default Coins;