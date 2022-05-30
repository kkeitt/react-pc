import LoginStore from "./login.Store"
import React from 'react'
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }