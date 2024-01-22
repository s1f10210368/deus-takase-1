/* eslint-disable */
export type Channel = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  createdAt?: string | undefined
}

export type Message = {
  id?: string | undefined
  content?: string | undefined
  createdAt?: string | undefined
  senderId?: string | undefined
  channelId?: string | undefined
}

export type DirectMessage = {
  id?: string | undefined
  content?: string | undefined
  createdAt?: string | undefined
  senderId?: string | undefined
  receiverId?: string | undefined
}
