import './App.css';
import {useState} from "react"
import Box from "./component/Box"

// 1. 박스두개 (타이틀, 사진정보, 결과)
// 2. 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 누가 이겼는지 따진다.
// 6. 이기면 초록색 지면 빨강색 비기면 검정색

const choice = {
  rock:{
    name:"Rock",
    img:"https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/77239614-3add-423b-a97d-3eb056577356"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://img.freepik.com/free-vector/background-with-a-crumpled-paper-effect_1048-14358.jpg?w=2000"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComSelect(computerChoice);
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }
  

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect}/>
        <Box title="COMPUTER" item={comSelect}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  )

}

export default App;