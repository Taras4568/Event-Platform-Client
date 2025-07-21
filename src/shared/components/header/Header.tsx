import { Box, Input } from '@mui/material'
import UserAvatar from '~/shared/components/user-avatar/UserAvatar'
import ButtonInHeader from '~/shared/components/NavBar/Button/ButtonInHeader'
import Logo from '~/shared/components/logo/Logo'
import { styles } from './Header.style'

export const Header = () => {
  const user = {
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/40'
  }

  return (
    <Box component={'header'} sx={styles.mainHeader}>
      <Box>
        <Logo />
        <Input />
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
