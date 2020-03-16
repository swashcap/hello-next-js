import { withCustomConfig } from 'react-docgen-typescript'
import mdx from '@mdx-js/mdx'
import path from 'path'

const { parse } = withCustomConfig('./tsconfig.json', {
  propFilter(prop) {
    if (prop.parent) {
      return !prop.parent.fileName.includes('node_modules')
    }

    return true
  }
})

export const getComponentDoc = async (name: string) => {
  const parsed = parse(
    path.join(process.cwd(), '/components/library/', `${name}.tsx`)
  )

  if (!parsed.length || !parsed[0]) {
    throw new Error(`Could not parse ${name}`)
  }

  const doc = {
    ...parsed[0],
    description: await mdx(parsed[0].description)
  }

  return doc
}
