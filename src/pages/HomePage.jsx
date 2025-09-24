import React from 'react'
import ChatSection from '../components/ChatSection'
import Sidebar from '../components/Sidebar'
import NoChatSelected from '../components/noChatSelected'
import { useChatStore } from '../store/useChatStore'

const HomePage = () => {
    const { selectedUser } = useChatStore();
  return (
    <>
      <Sidebar />
      {selectedUser ? <ChatSection selectedFriend={selectedUser} /> : <NoChatSelected />}
    </>
  )
}

export default HomePage
