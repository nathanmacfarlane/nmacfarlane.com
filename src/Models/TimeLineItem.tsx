class TimeLineItem {
  date!: string
  icon!: string
  location!: string
  position!: string
  description!: string[]
  company!: string
  backgroundColor?: string
  color?: string

  constructor(data: Partial<TimeLineItem>) {
    Object.assign(this, data)
  }
}

export default TimeLineItem
