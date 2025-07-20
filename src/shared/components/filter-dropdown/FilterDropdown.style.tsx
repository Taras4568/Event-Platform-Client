import { SxProps, Theme } from '@mui/material/styles'

export const styles: { [key: string]: SxProps<Theme> } = {
  triggerButton: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#444'
    },
    transition: 'background-color 0.2s',
    minWidth: '150px',
    justifyContent: 'space-between'
  },
  triggerButtonActive: {
    backgroundColor: 'blueviolet',
    color: 'white',
    borderRadius: '10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#blueviolet'
    },
    minWidth: '150px',
    justifyContent: 'space-between'
  },
  menuPaper: {
    marginTop: '8px',
    borderRadius: '16px',
    backgroundColor: '#333',
    color: 'white',
    minWidth: '150px'
  },
  menuItemLabel: {
    flexGrow: 1,
    minWidth: 0,
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    textAlign: 'left'
  },
  menuItem: {
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#444'
    },
    minHeight: '48px'
  },
  selectionControl: {
    color: '#555',
    '&.Mui-checked': {
      color: 'blueviolet'
    },
    flexShrink: 0,
    padding: 0
  },
  divider: {
    borderColor: '#444',
    margin: '8px 0'
  },
  resetMenuItem: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    '&:hover': {
      backgroundColor: '#444'
    }
  }
}
