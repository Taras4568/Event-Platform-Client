export const style = {
  button: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'none',
    padding: '8px 16px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: 'primary.main',
      transform: 'scaleX(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease-in-out'
    },
    '&:hover::after': {
      transform: 'scaleX(1)'
    }
  }
}
