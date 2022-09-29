import './GameBox.css';

function GameBox(){
    return(
        <div className="box">
            <div className="scoresBox">
                <ul className="scores">
                    <li className="historicalBestScore">Historical Best: </li>
                    <li className="currentScore">Score: </li>
                    <li className="currentBestScore">Session Best: </li>
                </ul>
            </div>
            <div className="cardsBox">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    );
}

export {GameBox};