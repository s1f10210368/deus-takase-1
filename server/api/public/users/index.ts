/* eslint-disable */
export type Methods = {
  post: {
    status: 201

    /** User created successfully */
    resBody: {
      id: string
      email: string
      name: string
    }

    /** User data to create a new user */
    reqBody: {
      email: string
      name: string
    }
  }
}
