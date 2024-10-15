import axios from 'axios'
import { requests } from './request'

export const getCollectionById = async (id: string): Promise<ICollection> => {
  try {
    const res = await axios.get(
      `${requests.getCollectionById}/${id}`
    )  
    return res.data.data
  } catch (error : any) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}

export const setLikeCollectionChange = async (
  id: string,
  address: string,
  like: string,
  token?: any
): Promise<void> => {
  await axios.post(
    `${requests.likeCollection}/${like}`,
    {
      collectionId: id,
      walletAddress: address,
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  )
}

export const setViewCollection = (id: string) => {
  try {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/collection/view`, {
      id,
    })
  } catch (error : any) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
}
