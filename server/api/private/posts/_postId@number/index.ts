/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** A single post */
    resBody: Types.Post
  }

  put: {
    status: 200

    reqBody: {
      title?: string | undefined
      content?: string | undefined
      categories?: string[] | undefined
    }
  }

  delete: {
    status: 204
  }
}
