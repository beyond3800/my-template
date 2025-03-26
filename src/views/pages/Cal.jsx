import React, { useRef, useState } from 'react'
import Content from '../../components/Content'
import CustomInput from '../../components/forms/CustomInput'
import CustomBtn from '../../components/button/CustomBtn'
import Card from '../../components/card/Card'

const Cal = () => {
  const [calInput, setCalInput] = useState(0);
  const [firstNums, setFirstNums] = useState(0);
  const [isOperate, setIsOperate] = useState(false);
  const [selectedOperator,setSelectedOperator] = useState('')
  const handleCal = (e) => {
    const value = e.target.textContent
    const id = e.target.id
    if (id === 'nums') {
      handleNums(value)
    }
    if (id === 'ac') {
      setCalInput(0)
      setSelectedOperator('')
    }
    if (id === 'del') {
      deleteNum()
    }
    if (id === '+' || id === '-' || id === '/' || id === '*' || id === '%' || id === '^') {
      operates(id)
      setSelectedOperator(id)
    }
    if (id === '=') {
      if (selectedOperator) {
        operates(selectedOperator)
        setSelectedOperator('')
      }
    }
  }
  const handleNums = (value) => {
    if (isOperate) {
      setCalInput('')
      setIsOperate(false)
      // setSelectedOperator('')
    }
     if (calInput.length > 10) {
      return
    }
    setCalInput(prev => {
      if ( !Number(calInput) && Number(value) === 0) {
        return 0
      }
      if (prev === 0 && value !== '.') {
        return value
      }
      return prev + value
    })

  }
  const deleteNum = () => {
    if (calInput.length > 1) {
      setCalInput((prev)=>prev.slice(0,-1))
    }
    else {
      setCalInput(0)
    }
  }
  const operates = (operate) => {
    setIsOperate(true)
    if (firstNums === 0) {
      setFirstNums(calInput)
      // setCalInput(0)
      return
      // calInputRef.current.textContext = firstNums;
    } else {
      if (operate === '+' && firstNums) {
        let result = Number(firstNums) + Number(calInput)
        result = result.toString();
        setCalInput(result)
        if (firstNums && calInput) {
          // setFirstNums(0)
        }
      }
      if (operate === '-' && firstNums) {
        let result = Number(firstNums) - Number(calInput)
        result = result.toString();
        setCalInput(result)
        if (firstNums && calInput) {
          // setFirstNums(0)
        }
      }
      if (operate === '*' && firstNums) {
        console.log(firstNums,calInput)
        let result = Number(firstNums) * Number(calInput)
        result = result.toString();
        setCalInput(result)
        if (firstNums && calInput) {
          // setFirstNums(0)
        }
      }
      if (operate === '/' && firstNums) {
        console.log(firstNums,calInput)
        let result = Number(firstNums) / Number(calInput)
        result = result.toString();
        setCalInput(result)
        if (firstNums && calInput) {
          // setFirstNums(0)
        }
      }
      if (operate === '%' && firstNums) {
        let result = Number(firstNums) % Number(calInput)
        result = result.toString();
        setCalInput(result)
        setSelectedOperator('')
        if (firstNums && calInput) {
          // setFirstNums(0)
        }
      }
      if (firstNums && calInput) {
          setFirstNums(0)
        }
    }
  }
  // new Intl.NumberFormat('en-US').format(calInput)
  return (
    <div>
      <Content>
        <div className="flex justify-center items-center h-full">
          <Card style={`rounded-lg border-2 `}>
            <div className={`text-2xl mb-10 overflow-x-auto text-right pr-9`}>{calInput}</div>
            <div className='cal_btnArea'>
                <CustomBtn id="ac" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>AC</CustomBtn>
                <CustomBtn id="%" style={`cal_btn ${selectedOperator === '%' && 'active'}`} handleClick={(e)=>handleCal(e)}>%</CustomBtn>
                <CustomBtn id="/" style={`cal_btn ${selectedOperator === '/' && 'active'}`} handleClick={(e)=>handleCal(e)}>/</CustomBtn>
                <CustomBtn id="del" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>Del</CustomBtn>
            </div>
            <div className='cal_btnArea'>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>7</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>8</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>9</CustomBtn>
                <CustomBtn id="-" style={`cal_btn ${selectedOperator === '-' && 'active'}`} handleClick={(e)=>handleCal(e)}>-</CustomBtn>
            </div>
            <div className='cal_btnArea'>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>4</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>5</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>6</CustomBtn>
                <CustomBtn id="+" style={`cal_btn ${selectedOperator === '+' && 'active'}`} handleClick={(e)=>handleCal(e)}>+</CustomBtn>
            </div>
            <div className='cal_btnArea'>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>1</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>2</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>3</CustomBtn>
                <CustomBtn id="*" style={`cal_btn ${selectedOperator === '*' && 'active'}`} handleClick={(e)=>handleCal(e)}>*</CustomBtn>
            </div>
            <div className='cal_btnArea'>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>00</CustomBtn>
                <CustomBtn id="nums" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>0</CustomBtn>
                <CustomBtn id={'nums'} style={`cal_btn `} handleClick={(e)=>handleCal(e)}>.</CustomBtn>
                <CustomBtn id="=" style={`cal_btn `} handleClick={(e)=>handleCal(e)}>=</CustomBtn>
            </div>
          </Card>
        </div>
      </Content>
    </div>
  )
}

export default Cal