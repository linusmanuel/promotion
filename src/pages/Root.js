import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import PagesPromotionSearch from './Promotion/Search/Search'
import PagesPromotionForm from './Promotion/Form/Form'

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<PagesPromotionForm />}></Route>
        <Route path="/create/edit/:id" element={<PagesPromotionForm />}></Route>
        <Route path="/" element={<PagesPromotionSearch />}></Route>
      </Routes>
    </Router>
  );
}

export default Root;
 