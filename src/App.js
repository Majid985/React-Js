import './App.css';
import { useState } from 'react'
import Addition from '../../aritmatic-game/src/components/Addition';
import Subtraction from '../../aritmatic-game/src/components/Subtraction';
import Multiplication from './components/Multiplication'



function App() {

  

  const [page, setPage] = useState(
    <div>
        <h2>SELECT THE GAME</h2>
        <div ><button className='home-page-button' onClick={onAddition}>Addition</ button></div>
        <div ><button className='home-page-button' onClick={onSubtraction}>Subtraction</ button></div>
        <div ><button className='home-page-button' onClick={onMultiplication}>Multiplication</ button></div>
      </div>)

    

  function onAddition() {
    setTimeout(() => {
      setPage(<div>
        <h2>SELECT THE GAME</h2>
        <div ><button className='home-page-button' onClick={onAddition}>Addition</ button></div>
        <div ><button className='home-page-button' onClick={onSubtraction}>Subtraction</ button></div>
        <div ><button className='home-page-button' onClick={onMultiplication}>Multiplication</ button></div>
      </div>)
    }, 60000)
    setPage(<Addition />)
  }

  function onSubtraction() {
    setTimeout(() => {
      setPage(<div>
        <h2>SELECT THE GAME</h2>
        <div ><button className='home-page-button' onClick={onAddition}>Addition</ button></div>
        <div ><button className='home-page-button' onClick={onSubtraction}>Subtraction</ button></div>
        <div ><button className='home-page-button' onClick={onMultiplication}>Multiplication</ button></div>
      </div>)
    }, 60000)
    setPage(<Subtraction />)
  }

  function onMultiplication() {
    setTimeout(() => {
      setPage(<div>
        <h2>SELECT THE GAME</h2>
        <div ><button className='home-page-button' onClick={onAddition}>Addition</ button></div>
        <div ><button className='home-page-button' onClick={onSubtraction}>Subtraction</ button></div>
        <div ><button className='home-page-button' onClick={onMultiplication}>Multiplication</ button></div>
      </div>)
    }, 60000)
    setPage(<Multiplication />)
  }

  return (
    <div className="App">
      {page}
    </div>
  );
}

export default App;
