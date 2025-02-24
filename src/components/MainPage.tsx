import React, { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api';
import Header from '../components/Header';


// import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from '../graphql/queries';
import { ISubscription } from '../types/types';
import SubscriptionItem from './SubscriptionItem';

const client = generateClient();


const MainPage = () => {
    const [subscriptions, setSubscriptions] = useState<Array<ISubscription>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchSubscriptions = async () => {
        try {
            setLoading(true)
            const res = await client.graphql({
             query: listTodos
            })
            console.log("FETCHED SUBSCRIPTIONS: ", res)
            setSubscriptions(res.data.listTodos.items)
            
            setLoading(false)
            setError(null)
        } catch (error) {
            console.log("ERROR WHILE FETCHING SUBSCRIPTIONS: ", error instanceof Error ? error.message : "Uknown error")
            setError(error instanceof Error ? error.message : "Unknown error")
            setSubscriptions([])
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSubscriptions()
    }, [])
  return (
    <div className='flex items-start flex-col w-full min-h-[100vh] mx-auto self-start'>
        {/* HEADER */}
        <Header />
        
        {/* RENDERED SUBSCRIPTIONS */}
        <div className='flex  items-center justify-between w-full flex-row mt-10 flex-wrap'>
            {
                subscriptions.length === 0
                ?
                loading
                ?
                <p className='w-full text-center font-bold mt-10 text-2xl'>Loading...</p>
                :
                <p>No posts</p>
                :
                subscriptions.map((subscription) => <SubscriptionItem key={subscription.id} {...subscription}/>)
            }

        </div>

    </div>
  )
}

export default MainPage