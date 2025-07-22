import { Avatar, IconButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import type { UserAvatarProps } from '~/src/types/interfaces/header'
import { style } from './UserAvatar.style'
const UserAvatar = (user: UserAvatarProps) => {
  return (
    <Tooltip title='Профіль'>
      <IconButton
        aria-label='Перейти до профілю'
        component={Link}
        sx={style.iconButton}
        to='/profile'
      >
        <Avatar alt={user.name} src={user.imageUrl} sx={style.imageSize} />
      </IconButton>
    </Tooltip>
  )
}

export default UserAvatar
