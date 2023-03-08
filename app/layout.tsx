import { AuthContextProvider } from './server/context/AuthContext'
import Link from 'next/link'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <div>
                    <Link href='/signin'>Sigin</Link>
                    <Link href='/signup'>Sig up</Link>
                    <AuthContextProvider>
                        {children}
                    </AuthContextProvider>
                </div>
            </body>
        </html>
    )
}