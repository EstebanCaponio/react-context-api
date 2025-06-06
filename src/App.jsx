import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaDeiPost from "./pages/PostsPage"
import DefaultLayout from "./layout/DefaultLayaout"
import SinglePost from "./pages/SinglePost"
import { ListProvider } from "./contexts/ListContext"

function App() {

  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/chi-siamo' element={<ChiSiamo />} />
            <Route path='/blog' element={<ListaDeiPost />} />
            <Route path='/blog/:id' element={<SinglePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  )
}

export default App
