import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import { Locale, i18n } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'B2Geta | Store',
  description: 'Store - The place for all your purchases.',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider dictionary={dictionary.product} />
        <Navbar lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  )
}