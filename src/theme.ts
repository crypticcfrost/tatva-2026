import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#fff5e6',
      100: '#ffe0b3',
      200: '#ffcc80',
      300: '#ffb84d',
      400: '#ffa31a',
      500: '#ff8f00',
      600: '#cc7200',
      700: '#995500',
      800: '#663800',
      900: '#331c00',
    },
    indian: {
      saffron: '#FF9933',
      white: '#FFFFFF',
      green: '#138808',
      blue: '#000080',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0a0e27' : '#f5f5f5',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
})

export default theme

