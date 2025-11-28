import { useEffect } from "react"
import Nav from "./components/Nav"
import { useDispatch } from "react-redux"
import MainRoutes from "./routes/MainRoutes"
import { asyncCurrentuser } from "./store/actions/userAction"
const App = () => {
  const dispatch = useDispatch()
useEffect(() => {
  
  dispatch(asyncCurrentuser())
}, [])
  return (
    <div>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App