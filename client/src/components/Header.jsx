import  { Typography, Box, useTheme } from '@mui/material'

export default function Header({ title, subTitle }) {
    const theme = useTheme()
  return (
    <Box>
        <Typography variant='h2' color={theme.palette.secondary[100]}
        fontWeight='bold'
        sx={{ mb:'5px' }}>
            {title}
        </Typography>
        <Typography variant='h5' color={theme.palette.secondary[500]}>
            {subTitle}
        </Typography>
        
    </Box>
  )
}
