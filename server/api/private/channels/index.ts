/* eslint-disable */
export type Methods = {
  post: {
    status: 201

    /** Channel created successfully */
    resBody: {
      id?: string | undefined
      name?: string | undefined
      description?: string | undefined
      createdAt?: string | undefined
    }

    reqBody: {
      name: string
      description?: string | undefined
    }
  }
}
