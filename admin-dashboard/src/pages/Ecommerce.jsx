import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked, Pie,Button,SparkLine} from '../components';
import { earningData,SparkLineAreaData,ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import Banner2 from '../Assets/Banner2.jpg';
const Ecommerce = () => {
    return(
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-xl w-full lg:w-90  pt-9 m-3 bg-hero-pattern  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${Banner2})` }}>
                  
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$690.099,90</p>
                        </div>

                    </div>
                    <div className='mt-6'>
                        <Button
                        color="white"
                        bgColor="blue"
                        text="Donwload"
                        borderRadius="10px"
                        size="md"/>
                    </div>
                </div>
            </div>
                <div className="flex m-3 flex-wrap justify-center gap-5 items-center">
                    {earningData.map((item) => (
                        <div key={item.title}
                            className="bg-white dark:text-gray-200
                            dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                            <button  type="button"style={{color:item.iconColor,
                                backgroundColor:item.iconBg}}
                                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                                    {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold"> {item.amount}</span>
                                <span  style={{color:"purple"}}className={`text-sm text-${item.pcColor} ml-2`}> {item.percentage}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">{item.title}</p>

                        </div>
                    ))}

                </div>
                  <div className='flex gap-10 flex-wrap justify-center'>
                    <div className='bg-white
                    dark:text-gray-200
                    dark:bg-secondary-dark-bg m-3 p-2
                    rounded-2xl md:w-780'>
                        <div className='flex justify-between'>
                                <p className='font-semibold text-xl'>Updates</p>
                                <div className='flex items-center gap-4'>
                                    <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                        <span><GoPrimitiveDot/></span>
                                        <span>Expense</span>
                                    </p>

                                    <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                                        <span><GoPrimitiveDot/></span>
                                        <span>Budget</span>
                                    </p>
                                        
                                </div>
                        </div>
                        <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                            <div className='border-r-1 border-color m-4 pr-10'>
                                <div>
                                    <p></p>
                                </div>

                            </div>

                        </div>
                    </div> 
                    
                </div>
        </div>
    )
}
export default Ecommerce;