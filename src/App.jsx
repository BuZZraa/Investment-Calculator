import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import {useState} from "react";

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return{
            ...prevUserInput,
            //+ used to convert the number
            [inputIdentifier] : +newValue
        }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleUserInputChange} />
      {inputIsValid ? 
        <Result input={userInput} /> :
        <p className="center">
          Please enter a duration greater than 0.
        </p>
      }
    </>
  )
}

export default App
