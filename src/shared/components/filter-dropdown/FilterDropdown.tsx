import React, { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Radio,
  Checkbox,
  Divider,
  Typography
} from '@mui/material'
import { styles } from './FilterDropdown.style'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseIcon from '@mui/icons-material/Close'
import { SelectionModeEnum } from '~/src/types/enums/selections'
import { FilterDropdownProps } from '~/src/types/interfaces/filterDropdawn'

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  triggerLabel,
  icon,
  options,
  selectionMode,
  value,
  onChange,
  maxHeight
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (clickedValue: string) => {
    if (selectionMode == SelectionModeEnum.SINGLE) {
      onChange(clickedValue)
      handleClose()
    } else {
      const currentSelection = (value as string[]) || []
      const newSelection = currentSelection.includes(clickedValue)
        ? currentSelection.filter((v) => v !== clickedValue)
        : [...currentSelection, clickedValue]
      onChange(newSelection)
    }
  }

  const handleReset = () => {
    onChange(selectionMode == SelectionModeEnum.SINGLE ? '' : [])
    handleClose()
  }

  const isFilterActive = Array.isArray(value) ? value.length > 0 : !!value

  const getDisplayLabel = () => {
    if (!isFilterActive) return triggerLabel
    if (selectionMode == SelectionModeEnum.SINGLE) {
      return options.find((opt) => opt.value === value)?.label || triggerLabel
    }
    const count = (value as string[]).length
    return `${count} selected`
  }

  return (
    <>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleOpen}
        startIcon={icon}
        sx={isFilterActive ? styles.triggerButtonActive : styles.triggerButton}
        variant='contained'
      >
        {getDisplayLabel()}
      </Button>

      <Menu
        PaperProps={{
          sx: {
            ...styles.menuPaper,
            maxHeight: maxHeight || 'auto',
            width: '150px'
          }
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={isOpen}
      >
        {options.map((option) => {
          const isSelected =
            selectionMode == SelectionModeEnum.SINGLE
              ? value === option.value
              : (value as string[]).includes(option.value)

          return (
            <MenuItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
              sx={styles.menuItem}
            >
              <Typography sx={styles.menuItemLabel} variant='body1'>
                {option.label}
              </Typography>
              {selectionMode == SelectionModeEnum.SINGLE ? (
                <Radio checked={isSelected} sx={styles.selectionControl} />
              ) : (
                <Checkbox checked={isSelected} sx={styles.selectionControl} />
              )}
            </MenuItem>
          )
        })}

        <Divider sx={styles.divider} />

        <MenuItem onClick={handleReset} sx={styles.resetMenuItem}>
          <CloseIcon fontSize='small' />
          <Typography variant='body1'>Reset</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default FilterDropdown
