import React from 'react'

const LeatestProducts = () => {
    return (
        <div className='w-[1024] max-w-screen-xl justify-center items-center  mx-auto'>
            <div>
                <h2 className='flex justify-center'>Leatest Products</h2>
            </div>
            <div>
                <nav>
                    <ul className='flex justify-center items-center text-center gap-9 text-sm'>
                        <li><a href="">Leatest Products</a></li>
                        <li><a href="">Best Seller</a></li>
                        <li><a href="">Featured</a></li>
                        <li><a href="">Special Offer</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-7 justify-center py-10 px-'>
               
                <div className='flex justify-center gap-5 w-[]'>
                    <div className='bg-white'>
                        <div className='flex flex-col    bg-[#F7F7F7] w-[275] h-[200] '>
                            <div className=' justify-center flex items-center    '>
                                <img src="icon/image 1166.png" alt="" className='w-[150] pt-8  ' />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white  py-1 my-[] text-xs'>
                            <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
                            <div className=' flex  '>
                                <h2 className='pr-3 hover:text-sm'>$42.00</h2>
                                <h2 className='text-red-500 line-through'>$65.00</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='flex justify-center gap-5'>
                    <div className='bg-white'>
                        <div className='flex flex-col    bg-[#F7F7F7] w-[275] h-[200] '>
                            <div className=' justify-center flex items-center    '>
                                <img src="icon/image 1166.png" alt="" className='w-[150] pt-8  ' />
                            </div>
                        </div>
                        <div className='flex justify-between bg-white  py-1 my-[] text-xs'>
                            <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
                            <div className=' flex  '>
                                <h2 className='pr-3 hover:text-sm'>$42.00</h2>
                                <h2 className='text-red-500 line-through'>$65.00</h2>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>



        </div>
    )
}

export default LeatestProducts
