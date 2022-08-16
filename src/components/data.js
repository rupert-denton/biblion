import { useEffect } from 'react'

const getPrizes = () => {
  useEffect(() => {
    dispatch(fetchPrizeData())
  }, [dispatch])
}
