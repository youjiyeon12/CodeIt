import Dice from "./Dice";
import styles from './Board.module.css'

function Board({ name, color, gameHistory, isLoser }) {
    const num = gameHistory[gameHistory.length-1] || 1; // 배열이 비어있을경우 1
    const sum = gameHistory.reduce((a, b) => a + b, 0);

    if (isLoser) {
        console.log(name);
    }

    return (
        <div>
            <h2 className={styles.title}>{name}</h2>
            <Dice color={color} num={num}/>
            <div>총점: {sum}</div>
            <div>기록: {gameHistory.join(', ')} </div>
        </div>
    )
}

export default Board;