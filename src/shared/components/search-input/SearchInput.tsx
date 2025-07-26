import React, { useState } from 'react'
import { Box, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { SearchInputProps } from '~/src/types/interfaces/header'
import { useSearchParams } from 'react-router-dom'
import { style } from './SearchInput.style'

const SearchInput = ({ placeholder, width }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const [inputValue, setInputValue] = useState(
    searchParams.get('search`') || ''
  )

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearchParams({ search: inputValue })
    }
  }
  return (
    <Box sx={style.mainContainer(width)}>
      <SearchIcon sx={style.searchIcon} />
      <InputBase
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
        placeholder={isFocused ? '' : placeholder}
        sx={style.inputBase}
        value={inputValue}
      />
    </Box>
  )
}

export default SearchInput
