class Project {
  id!: string
  description?: string
  website?: string
  title!: string
  platforms!: string[]
  imageUrl?: string
  languages!: string[]

  constructor(data: Partial<Project>) {
    Object.assign(this, data)
  }
}

export default Project
