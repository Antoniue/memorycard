import {useState} from "react";

function DrawCards({setScore,setBestScore,setHistoricalScore,images, score, bestScore, historicalScore}){
    const [picked, setPicked] = useState([]);
    
    localStorage.setItem('score', historicalScore);

    function logi(card){
        if(picked.includes(card.src))
        {
            console.log(card.src);
            console.log('includes');
            setPicked([]);
            if(score >= bestScore)
                setBestScore(score);
            setScore(0);
            if(score >= historicalScore)
                setHistoricalScore(score);
        }
        else if (!picked.includes(card.src))
        {
            console.log(card.src);
            console.log('doesnt');
            setPicked(prev => [...prev, card.src]);
            setScore(prev => prev+1);
            console.log(score);
        }
    }
    return(
        <>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[0]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[1]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[2]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[3]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[4]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[5]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[6]} alt="" /></div>
            <div className="card" onClick={(card) => {logi(card.target)}}><img src={images[7]} alt="" /></div>
        </>
    );
}

export {DrawCards};