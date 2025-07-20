import React from 'react'
import { SelectionModeEnum } from '~/src/types/enums/selections'

export interface DropdownOption {
  value: string
  label: string
}

export interface FilterDropdownProps {
  triggerLabel: string
  icon: React.ReactElement
  options: DropdownOption[]
  selectionMode: SelectionModeEnum
  value: string | string[]
  onChange: (newValue: string | string[]) => void
  maxHeight?: number
}

export interface FilterTypes {
  price: string
  categories: string[]
}
