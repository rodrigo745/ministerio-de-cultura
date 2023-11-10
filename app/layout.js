import { Roboto } from 'next/font/google'
import './globals.css'
import NavBar from './components/general/NavBar'

const inter = Roboto({ weight: ['100', '300', '500'], subsets: ['latin'] })

export const metadata = {
  title: 'Ministerio de cultura',
  description: 'Pagina de informacion del ministerio de cultura de la nacion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <NavBar/>
        {children}
      </body>
    </html>
  )
}
