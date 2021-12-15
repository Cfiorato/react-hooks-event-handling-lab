// Code Keypad Component Here

function Keypad(){
  function inputHandler(){
    console.log('Entering password...')
  }
  return <input type='password' onChange={inputHandler}/>
}

export default Keypad;