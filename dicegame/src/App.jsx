import { useState } from 'react';
import Button from './Button';
import Board from './Board';
import styles from './App.module.css'

// n값 이내의 랜덤값을 받는 함수
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // const [num, setNum] = useState(1);
  // const [sum, setSum] = useState(0); 
  const [myHistory, setMyHistory] = useState([]); // 배열 초기화 
  // const [otherNum, setOtherNum] = useState(1);
  // const [otherSum, setOtherSum] = useState(0); 
  const [otherHistory, setOtherHistory] = useState([]);

  // 던지기
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    // setNum(nextMyNum);
    // setSum(sum + nextMyNum);
    //gameHistory.push(nextNum);
    setMyHistory([...myHistory, nextMyNum]) // 아에 새로운 배열로 저장하는 방식(spread)
    // setOtherNum(nextOtherNum);
    // setOtherSum(otherSum + nextOtherNum);
    setOtherHistory([...otherHistory, nextOtherNum])
  };

  // 처음부터
  const handleclearClick = () => {
    // setNum(1);  
    // setSum(0);
    setMyHistory([]);
    // setOtherNum(1);
    // setOtherSum(0);
    setOtherHistory([]);
  };

  const myNum = myHistory[myHistory.length - 1] || 1;
  const otherNum = otherHistory[otherHistory.length - 1] || 1;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.appTitle}>주사위 게임</h1>
        <Button color="purple" onClick={handleRollClick}>던지기</Button>
      </div>
      <hr className={styles.divider} />
      <h2 className={styles.subtitle}>경기결과</h2>

      <div className={styles.boards}>
        <Board
          name="나"
          color="purple"
          // num={num} 
          // sum={sum} 
          gameHistory={myHistory}
          isLoser={myNum < otherNum}
        />
        <Board
          name="상대"
          color="red"
          // num={otherNum} 
          // sum={otherSum} 
          gameHistory={otherHistory}
          isLoser={otherNum < myNum}
        />
      </div>
      <div className={styles.resetButton}>
        <Button color="navy" onClick={handleclearClick}>처음부터</Button>
      </div>
    </div>
  );
}

export default App;
