import React, { useState } from "react"
import Header from "./Header"
import Image from "./Image"
import logo from '../img/react.png'


//class UserInput extends React.Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      helpText: 'Help text',
//      userData: '',
//    }

//    this.clicked = this.clicked.bind(this)
//  }


//  render() {
//    return (
//      <div>
//        <Header title="Any header" />
//        <h1>{this.state.helpText}</h1>
//        <h2>{this.state.userData}</h2>
//        <input type="text"
//          onChange={e => this.setState({ userData: e.currentTarget.value })}
//          placeholder={this.state.helpText}
//          onClick={this.clicked}
//          onMouseEnter={this.enterOver}
//        />
//        <p className="">{this.state.helpText === 'Help text' ? 'Yes' : 'No'}</p>
//        <Image image={logo} />
//      </div>
//    )
//  }

//  clicked() {
//    this.setState({ helpText: "Changed" })
//    console.log('Clicked')
//  }
//  enterOver() { console.log("Over Input") }
//}
function UserInput() {

  const [text, setText] = useState('Help text')
  const [input, setInput] = useState('')

  function clicked() {
    console.log('Clicked')
    setText('Changed')
  }
  function enterOver() {
    console.log("Over Input")
  }

  return (
    <div>
      <Header title="Any header" />
      <h1>{text}</h1>
      <h2>{input}</h2>
      <input type="text"
        onChange={e => setInput(e.currentTarget.value)}
        placeholder={text}
        onClick={clicked}
        onMouseEnter={enterOver}
        value={input}
      />
      <p className="">{text === 'Help text' ? 'Yes' : 'No'}</p>
      <Image image={logo} />
    </div>
  )
}
export default UserInput