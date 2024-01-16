/* eslint-disable */
export type User = {
  id: string
  email: string
  name: string
}

export type Message = {
  id: string
  content?: string | undefined
  imageUrl?: string | undefined
  videoUrl?: string | undefined
  stampUrl?: string | undefined
  createdAt: string
  senderId: string
  recipientId: string
}
