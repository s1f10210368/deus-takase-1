/* eslint-disable */
export type Post = {
  id: number
  title: string
  content?: string | undefined
  published: boolean
  createdAt: string
  updatedAt: string
  authorId: string
  categories?: Category[] | undefined
}

export type Category = {
  id: number
  name: string
}
