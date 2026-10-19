import { Route, Routes } from "react-router-dom"
import HelloWorldPage from "../modules/helloworld/HelloWorldPage"
import HomePage from "../modules/home/HomePage"
import NotFoundPage from "../modules/errors/NotFoundPage"
import CounterPage from "../modules/counter/CounterPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hello-world" element={<HelloWorldPage />} />
      <Route path="/counter" element={<CounterPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
