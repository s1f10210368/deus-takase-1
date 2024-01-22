/* eslint-disable */
export type Methods = {
  post: {
    status: 201

    /** Message sent successfully */
    resBody: {
      id?: string | undefined
      content?: string | undefined
      createdAt?: string | undefined
      senderId?: string | undefined
      channelId?: string | undefined
    }

    reqBody: {
      content: string
    }
  }
}
