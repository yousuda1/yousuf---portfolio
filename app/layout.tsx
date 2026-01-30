import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Yousuf Ansari — Embedded Systems",
  description: "PCB Design • Firmware • IoT Prototyping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="border-b">
          <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Yousuf
            </Link>

            <nav className="flex gap-5 text-sm text-gray-700">
              <Link href="/projects" className="hover:text-gray-900">
                Projects
              </Link>
              <Link href="/services" className="hover:text-gray-900">
                Services
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t mt-16">
          <div className="max-w-5xl mx-auto px-8 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Yousuf Ansari — PCB • Firmware • IoT
          </div>
        </footer>
      </body>
    </html>
  );
}