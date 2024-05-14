import React from 'react'
import shirt from '../../assets/shirt.png'
import sportsshoes from '../../assets/sportsshoes.png'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 1
}

const BigCard = (photo, brand, title, price, offer) => {
    return (


        <div>
            <div>
                <div>
                    <Flickity
                        className='carousel w-full' // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        <div className=''>
                           <div className=''> <img className='h-[20rem] w-[24rem]' src={shirt} /> </div>
                            <div className='flex flex-col justify-center items-center absolute z-20 top-52 left-32 text-xl font-bold'> <p className='text-black font-extrabold bg-white flex justify-center items-center'>Roadster</p> <p className='font-extrabold text-2xl text-white'>Causual Shirt</p> <p className='text-orange-400 font-extrabold italic text-2xl'>30%-70% OFF</p> </div>

                        </div>

                        <img className='h-[20rem] w-[24rem]' src={sportsshoes} />
                        <img className='h-[20rem] w-[24rem]' src={sportsshoes} />
                    </Flickity>
                </div>
                <div>



                </div>
            </div>

            {/* <div>
                <div >
                    <img className='h-[20rem] w-[20rem]' src={shirt} />
                </div>
                <div>
                    <p>Roadster</p>
                    <p>Causual Shirt</p>
                    <p>30%-70% OFF</p>
                </div>
            </div>

            <div>
                <div >
                    <img className='h-[20rem] w-[20rem]' src={sportsshoes} />
                </div>
                <div>
                    <p>Roadster</p>
                    <p>Causual Shirt</p>
                    <p>30%-70% OFF</p>
                </div>
            </div> */}

        </div>
    )
}

export default BigCard
