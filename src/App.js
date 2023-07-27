import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  // Using an If...Else Statement

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  //   render() {
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {this.renderAuthButton()}
  //       </div>
  //     )
  //   }
  // }

  // Using Element Variables

  //   render() {
  //     const {isLoggedIn} = this.state
  //     let authButton
  //     if (isLoggedIn) {
  //       authButton = <button type="button">Logout</button>
  //     } else {
  //       authButton = <button type="button">Login</button>
  //     }
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {authButton}
  //       </div>
  //     )
  //   }
  // }
  // Using Ternary Operators
  //   render() {
  //     const {isLoggedIn} = this.state
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn ? (
  //           <button type="button">Logout</button>
  //         ) : (
  //           <button type="button">Login</button>
  //         )}
  //       </div>
  //     )
  //   }
  // }

  //  Using Logical && Operator

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
