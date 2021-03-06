import LoginStore from "./login.Store"
import React from 'react'
import UserStore from "./user.Store"
import ChannelStore from "./channel.Store"
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    this.channelStore = new ChannelStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }