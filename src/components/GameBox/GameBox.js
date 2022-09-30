import {useEffect, useState } from 'react';
import { DrawCards } from '../DrawCards';
import './GameBox.css';
import poke1 from './images/poke1.png';
import poke2 from './images/poke2.png';
import poke3 from './images/poke3.png';
import poke4 from './images/poke4.png';
import poke5 from './images/poke5.png';
import poke6 from './images/poke6.png';
import poke7 from './images/poke7.png';
import poke8 from './images/poke8.png';

function shuffleCards(cards){
    for(let index = 0; index < 8; index++)
    {
        let num = Math.floor(Math.random() * 8);
        [cards[num], cards[index]] = [cards[index],cards[num]];
    }
    return cards;
};

function GameBox(){
    const [images, setImages] = useState([poke1,poke2,poke3,poke4,poke5,poke6,poke7,poke8]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [historicalScore, setHistoricalScore] = useState(Number(localStorage.getItem('score')));

    return(
        <div className="box">
            <div className="scoresBox">
                <ul className="scores">
                    <li className="historicalBestScore">Historical Best: {historicalScore}</li>
                    <li className="currentScore">Score: {score}</li>
                    <li className="currentBestScore">Session Best: {bestScore}</li>
                </ul>
            </div>
            <div className="cardsBox">
                <DrawCards images={shuffleCards(images)} setScore={setScore} setBestScore={setBestScore} setHistoricalScore={setHistoricalScore} score={score} bestScore={bestScore} historicalScore={historicalScore}/>
            </div>
        </div>
    );
}

export {GameBox, shuffleCards};