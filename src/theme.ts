import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': { bgColor: 'gray.600' },
    },
  },
})

export default theme
