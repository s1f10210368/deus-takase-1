/* eslint-disable */
export type Methods = {
  post: {
    status: 201

    /** Message sent successfully */
    resBody: {
      id: string
      content?: string | undefined
      imageUrl?: string | undefined
      videoUrl?: string | undefined
      stampUrl?: string | undefined
      createdAt: string
      senderId: string
      recipientId: string
    }

    /** Message data to send a message */
    reqBody: {
      content?: string | undefined
      imageUrl?: string | undefined
      videoUrl?: string | undefined
      stampUrl?: string | undefined
      recipientId: string
    }
  }
}
