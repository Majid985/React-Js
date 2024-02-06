import React, { cloneElement, useState } from 'react'
import { useEffect } from 'react'
import './style.css'


function Options(props) {

    const [score, setScore] = useState(0)
    // Object.preventExtensions(score)

    let option = 0
    function selectFirstOption(props) {
        (option === 1) ? (setScore(score + 1)) : (setScore(score - 0.25))
    }

    function selectSecondOption(props) {
        (option === 2) ? (setScore(score + 1)) : (setScore(score - 0.25))
    }

    function selectThirdOption(props) {
        (option === 3) ? (setScore(score + 1)) : (setScore(score - 0.25))
    }

    useEffect(() => {
        document.addEventListener('keypress', detectKeyPress, true)
        return () => {
            document.removeEventListener('keypress', detectKeyPress, true);
        };
    }, [])

    const detectKeyPress = (e) => {
        // console.log('clicked key: ', e.key)

        if (e.key === '1') {
            selectFirstOption()
            // console.log('1')
        }
        else if (e.key === '2') { selectSecondOption() }
        else if (e.key === '3') { selectThirdOption() }
    }



    option = props.correct_option
    // let sore=9
    // let score2=cloneElement(sore)
    let expression = 0
    //  expression = (props.operator==='+')?(props.first_operand + props.Second_operand):(
    // (props.operator==='-')?(props.first_operand - props.Second_operand):
    // ((props.operator==='-')?(props.first_operand - props.Second_operand):
    // )
    // )

    if (props.operator === '+') { expression = props.first_operand + props.Second_operand }
    else if (props.operator === '-') { expression = props.first_operand - props.Second_operand }
    else if (props.operator === '*') { expression = props.first_operand * props.Second_operand }


    return (
        <div onClick={() => props.getScore(score)}>
            <div className='options' onClick={selectFirstOption}>{(props.correct_option === 1) ? (expression) : (props.operator === '*') ? Math.floor(Math.random() * 1000000) : Math.floor(Math.random() * 1000)}</div>
            <div className='options' onClick={selectSecondOption}>{(props.correct_option === 2) ? (expression) : (props.operator === '*') ? Math.floor(Math.random() * 1000000) : Math.floor(Math.random() * 1000)}</div>
            <div className='options' onClick={selectThirdOption}>{(props.correct_option === 3) ? (expression) : (props.operator === '*') ? Math.floor(Math.random() * 1000000) : Math.floor(Math.random() * 1000)}</div>
            {/* <h3>{score}</h3> */}
        </div>
    )
}

export default Options