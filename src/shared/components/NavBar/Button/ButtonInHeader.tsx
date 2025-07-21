import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { ButtonHeader } from '~/src/types/interfaces/header'
import { style } from './ButtonInHeader.style'

const ButtonInHeader = ({ linkTo, title }: ButtonHeader) => {
  return (
    <Button component={Link} sx={style.button} to={linkTo}>
      {title}
    </Button>
  )
}

export default ButtonInHeader
