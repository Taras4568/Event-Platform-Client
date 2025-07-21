import { Box } from '@mui/material'
import { styles } from './Header.style'

export const Header = () => {
  return (
    <Box component={'header'} sx={styles.mainHeader}>
      Event platform header
    </Box>
  )
}
