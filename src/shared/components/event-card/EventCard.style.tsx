export const style = {
  cardContainer: (width: number, height: number, posterUrl: string) => ({
    position: 'relative',
    width: { width },
    height: { height },
    backgroundImage: `url(${posterUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '1.2rem',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover .overlay': {
      opacity: 1
    }
  }),
  dateBlock: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'black',
    color: 'white',
    '& .MuiChip-icon': {
      color: 'white'
    }
  },
  shadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    transition: 'opacity 0.4s ease-in-out',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 75%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center'
  }
}
