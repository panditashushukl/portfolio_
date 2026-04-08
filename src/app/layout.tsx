import Navbar from "../components/sections/Navbar"
import "./globals.css"


export const metadata = {
  title: "Ashutosh Shukla",
  description: "Portfolio",
  icon:"/icon.svg", 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}