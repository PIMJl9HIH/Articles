import {TYPE} from '../constants'

const defaultFilters = {
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.CHANGE_DATE_RANGE:
      return {...filters, dateRange: payload.dateRange}
    default:
      return filters
  }
}