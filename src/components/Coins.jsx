import React from 'react'

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  if (error) {
    return <ErrorComponent message={"Error While Fetching API Data"} />
  }

  return (
    <Container maxW="container.xl">
      {loading ? <Loader /> : <>

        <HStack wrap="wrap">
          {
            exchanges.map((item) => (
              <ExchangeCard key={item.id} name={item.name} img={item.image} rank={item.trust_score_rank} url={item.url} />
            ))
          }
        </HStack>
      </>}
    </Container>
  )
}

export default Coins;