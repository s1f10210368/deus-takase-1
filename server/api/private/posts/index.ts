/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 201

    reqBody: {
      title: string
      content?: string | undefined
      categories?: string[] | undefined
    }
  }

  get: {
    status: 200
    /** A list of posts */
    resBody: Types.Post[]
  }
}
