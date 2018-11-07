import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "../components/ProductList/ProductList"
import ProductPage from "../pages/ProductPage/ProductPage"

const Content = () => {
  return (
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id/:title" component={ProductPage} />
      </Switch>
  )
}


export default Content