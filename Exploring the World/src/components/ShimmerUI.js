const ShimmerUIcard = () => {
    return (
        <div className='hotel shimmer'> 
        <a href=''>
            <div className="shimmer shimmer-img" width="254" height="160"></div>
            <div className='shimmer shimmer-title'>
            <div className='hotelName shimmer'></div>
            <div className='hotelDescription shimmer'></div>
            </div>
            <div className='hotelDetails shimmer shimmer-details'>
            <span></span>
            <span className='hotelTime shimmer'></span>
            <span></span>
            <span className='hotelCost shimmer'></span>
            </div>
        </a>
        </div>
    )
}

const ShimmerUI = () => {
    return(
        <div id="cards">
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        <ShimmerUIcard />
        </div>
    )
}

export default ShimmerUI 