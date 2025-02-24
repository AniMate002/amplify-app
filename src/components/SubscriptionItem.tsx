import React from 'react';
import { ISubscription } from '../types/types';

interface SubscriptionItemProps extends ISubscription {}

const SubscriptionItem: React.FC<SubscriptionItemProps> = (subscription) => {
  return (
    <div className="flex flex-col h-[300px] justify-start items-start bg-[#383838] p-8 rounded-2xl">
      <p className="font-bold text-3xl">{subscription.name}</p>
      <p className="w-[200px] text-left mt-4 text-[#b9b9b9]">{subscription.description}</p>
      <div className='mt-auto self-start flex flex-row w-full justify-between items-center'>
        <p className="text-left  text-emerald-500 font-bold text-4xl">{subscription.price}$</p>
        <div className='flex items-center justify-center bg-emerald-500 px-8 py-2 rounded-full font-bold hover:bg-emerald-400 transition-all duration-[0.1s] cursor-pointer'>Купить</div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
