import { Box } from '@mui/material'
import UserAvatar from '~/shared/components/user-avatar/UserAvatar'
import ButtonInHeader from '~/shared/components/NavBar/Button/ButtonInHeader'
import Logo from '~/shared/components/logo/Logo'
import { styles } from './Header.style'
import SearchInput from '~/shared/components/search-input/SearchInput'

export const Header = () => {
  const user = {
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/40'
  }

  return (
    <Box component={'header'} sx={styles.mainHeader}>
      <Box sx={styles.logoAndInput}>
        <Logo />
        <Box sx={{ ml: 3 }}>
          <SearchInput placeholder={'Search events'} width={600} />
        </Box>
      </Box>
      <Box>
        <ButtonInHeader linkTo={'/tickets'} title={'Tickets'} />
        <ButtonInHeader linkTo={'/events'} title={'Events'} />
        <ButtonInHeader linkTo={'/support'} title={'Help Center'} />

        <UserAvatar imageUrl={user.avatarUrl} name={user.name} />
      </Box>
    </Box>
  )
}
