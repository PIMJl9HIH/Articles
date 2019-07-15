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
//            return Object.assign({}, filters, { dateRange: payload.dateRange })
      return {...filters, dateRange: payload.dateRange}

    case TYPE.DELETE_ARTICLE:
      return {...filters, selected: filters.selected.filter(id => id !== payload.id)}
  }

  return filters
}