export const style = {
  mainContainer: (width: number) => ({
    display: 'flex',
    alignItems: 'center',
    width: width || '100%',
    height: '40px',
    backgroundColor: '#333',
    borderRadius: '25px',
    border: '1px solid #666',
    padding: '0 16px',
    transition: 'border-color 0.2s ease-in-out',
    '&:focus-within': {
      borderColor: 'white'
    }
  }),
  searchIcon: {
    color: '#666',
    marginRight: '8px'
  },
  inputBase: {
    color: 'white',
    width: '100%',
    fontSize: '1rem',
    '& .MuiInputBase-input::placeholder': {
      color: '#9e9e9e',
      opacity: 1
    }
  }
}
