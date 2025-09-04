import Login from "./Components/Login"
import Profile from "./Components/Profile"
import WelcomeMessage from "./Components/WelcomeMessage"
import UserContextProvider from "./context/UserContextProvider"
import WelcomeMessage from "./Components/WelcomeMessage"

function App() {
  

  return (
    <UserContextProvider>

    <h1 className="text-center text-3xl mt-10">React With "CHAI"</h1>
    <Login />
    <Profile/>
    <WelcomeMessage/>

    </UserContextProvider>
  )
}

export default App
