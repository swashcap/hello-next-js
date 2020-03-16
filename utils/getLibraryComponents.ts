import { promises as fs } from 'fs'
import path from 'path'

export const getLibraryComponentFilenames = async () => {
  const dirname = path.join(process.cwd(), '/components/library')
  const contents = await fs.readdir(dirname)
  const filenamesAndStats = await Promise.all(
    contents.map(basename => {
      const filename = path.join(dirname, basename)
      return Promise.all([fs.stat(filename), filename])
    })
  )

  return filenamesAndStats.reduce<string[]>(
    (memo, [stats, filename]) =>
      stats.isFile() && filename.endsWith('.tsx')
        ? memo.concat(filename)
        : memo,
    []
  )
}

export const getLibraryComponentLinks = async () => {
  const filenames = await getLibraryComponentFilenames()

  return filenames.map(filename => {
    const { name } = path.parse(filename)

    return {
      href: `/components/${name}`,
      name
    }
  })
}

export const getLibraryComponentPaths = async () => {
  const filenames = await getLibraryComponentFilenames()

  return filenames.map(filename => path.parse(filename).name)
}
