function DrawCards({images}){
    return(
        <>
            <div className="card"><img src={images[0]} alt="" /></div>
            <div className="card"><img src={images[1]} alt="" /></div>
            <div className="card"><img src={images[2]} alt="" /></div>
            <div className="card"><img src={images[3]} alt="" /></div>
            <div className="card"><img src={images[4]} alt="" /></div>
            <div className="card"><img src={images[5]} alt="" /></div>
            <div className="card"><img src={images[6]} alt="" /></div>
            <div className="card"><img src={images[7]} alt="" /></div>
        </>
    );
}

export {DrawCards};