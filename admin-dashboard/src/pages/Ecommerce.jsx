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
        </div>
    )
}
export default Ecommerce;