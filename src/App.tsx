import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { store } from './store'
import { favoritar } from './store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={[]} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
