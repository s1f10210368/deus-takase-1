/* eslint-disable */
export type Methods = {
  post: {
    status: 201

    /** Direct message sent successfully */
    resBody: {
      id?: string | undefined
      content?: string | undefined
      createdAt?: string | undefined
      senderId?: string | undefined
      receiverId?: string | undefined
    }

    reqBody: {
      receiverId: string
      content: string
    }
  }
}
