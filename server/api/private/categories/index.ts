/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 201

    reqBody: {
      name: string
    }
  }

  get: {
    status: 200
    /** A list of categories */
    resBody: Types.Category[]
  }
}
