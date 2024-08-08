import React, { useState } from "react";
import Card from "./components/Card";
function App() {

  const data = [{name:"Image 1",proffesion:"Image 11111", image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",friend:false},
  {name:"Image 2",proffesion:"Image 22222", image:"https://images.unsplash.com/photo-1722288906668-428d43f2c09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",friend:false},
  {name:"Image 3",proffesion:"Image 33333", image:"https://plus.unsplash.com/premium_photo-1721102828753-64ca0a95fc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",friend:false},  
  ];

  const [realData,setRealData] = useState(data);
  const handleAddFriend = (userIndex)=>{
    return setRealData((previous)=>{
      return previous.map((item,index)=>{
        if(index === userIndex){
          return {...item,friend: !item.friend}
        }
        return item;
      })
    })
  }


  return (
    <>
    <div className="h-screen w-screen bg-zinc-200 flex items-center justify-center">
      {realData.map((item,index)=>{
        return <Card key="index" index={index} handleClick={handleAddFriend} values={item}  />
      })}
    </div>
    </>
  )
}

export default App
