import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import FilterDropdown from '~/shared/components/filter-dropdown/FilterDropdown'

import PaymentsIcon from '@mui/icons-material/Payments'
import CategoryIcon from '@mui/icons-material/Category'
import { SelectionModeEnum } from '~/src/types/enums/selections'
import { FilterTypes } from '~/src/types/interfaces/filterDropdawn'
import { styles } from './eventFilters.style'
const priceOptions = [
  { value: 'free', label: 'Free' },
  { value: 'free-100', label: 'Free - 100 грн' },
  { value: '100-200', label: '100 - 200 грн' },
  { value: '200-300', label: '200 - 300 грн' },
  { value: '300-500', label: '300 - 500 грн' },
  { value: '500-1000', label: '500 - 1000 грн' },
  { value: '1000', label: 'більше 1000 грн' },
]

const categoryOptions = [
  { value: 'music', label: 'Music' },
  { value: 'art', label: 'Art & Culture' },
  { value: 'sport', label: 'Sport' },
  { value: 'food', label: 'Food & Drink Drink Drink' }
]

const EventFilters = () => {
  const [filters, setFilters] = useState<FilterTypes>({
    price: '',
    categories: []
  })

  const handleFilterChange = (
    filterName: keyof FilterTypes,
    newValue: string | string[]
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: newValue
    }))
  }

  useEffect(() => {
    const queryParams = new URLSearchParams()

    if (filters.price) {
      queryParams.append('price', filters.price)
    }
    if (filters.categories.length > 0) {
      filters.categories.forEach((categoryValue) => {
        queryParams.append(categoryValue, 'true')
      })
    }
    const queryString = queryParams.toString()
    console.log(`Ready to fetch: /api/events?${queryString}`)
  }, [filters])

  return (
    <Box sx={styles.container}>
      <FilterDropdown
        icon={<PaymentsIcon />}
        maxHeight={250}
        onChange={(newValue) => handleFilterChange('price', newValue)}
        options={priceOptions}
        selectionMode={SelectionModeEnum.SINGLE}
        triggerLabel='Price'
        value={filters.price}
      />

      <FilterDropdown
        icon={<CategoryIcon />}
        maxHeight={250}
        onChange={(newValue) => handleFilterChange('categories', newValue)}
        options={categoryOptions}
        selectionMode={SelectionModeEnum.MULTIPLE}
        triggerLabel='Category'
        value={filters.categories}
      />
    </Box>
  )
}

export default EventFilters
