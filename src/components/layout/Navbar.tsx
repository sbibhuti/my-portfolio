import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import Button from '../ui/Button'

// Example navigation data structure used by desktop and mobile menus.
const NAV_ITEMS = [
  { path: '/', label: 'Repo' },
  { path: '/about', label: 'Tech_Stack' },
  { path: '/experience', label: 'Contributions' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Handler' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastMenuCloseAtRef = useRef(0)

  const closeMobileMenu = () => {
    lastMenuCloseAtRef.current = Date.now()
    setIsMobileMenuOpen(false)
  }

  const openMobileMenu = () => {
    // Prevent immediate re-open caused by duplicate tap/click events on mobile.
    if (Date.now() - lastMenuCloseAtRef.current < 250) return
    setIsMobileMenuOpen(true)
  }

  const handleToggle = () => {
    closeMobileMenu();
    toggleTheme();
  }

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className="bg-surface-container-low border-outline-variant fixed top-0 z-50 w-full border-b px-4 py-3 md:px-6"
      aria-label="Primary navigation"
    >
      <div className="relative flex items-center justify-between">
        {/* Logo stays on left across all breakpoints */}
        
        <div className="text-on-surface flex min-w-0 items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700 md:h-9 md:w-9">
            <img
              src="https://proper-gray-59kjqqadtj.edgeone.app/IMG-1660.jpg"
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <span className="text-on-background font-mono text-xl font-black tracking-tight">
              BIBHUTI.SUNARI
            </span>
          </Link>
        </div>

        {/* Tablet and desktop keep horizontal links; spacing is tighter on md. */}
        <ul className="hidden list-none items-center gap-4 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:gap-8">
          {NAV_ITEMS.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-label group relative pb-1 text-[0.875rem] uppercase transition-colors duration-200 lg:text-[0.9375rem] ${isActive
                      ? 'text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                >
                  {link.label}
                  <span
                    className={`bg-primary absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden md:inline-flex gap-2">
            <Button variant="ghost" >
              Hire Me
            </Button>
            <Button
              variant="ghost"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title="Toggle Theme"
              className="p-0"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          <button
            type="button"
            onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            className="text-on-surface inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:hidden"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <Dialog
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        className="relative z-40 md:hidden"
      >
        {/* Backdrop blur with fade animation */}
        <div
          className={`fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          aria-hidden="true"
        />

        {/* Slide-down panel from top */}
        <div className="fixed inset-0 flex items-start px-0 pt-16">
          <Dialog.Panel
            id="mobile-nav-menu"
            className={`bg-surface-container-low border-outline-variant max-h-[78vh] w-full overflow-y-auto rounded-b-3xl border border-t-0 px-5 pb-6 pt-5 shadow-2xl transition-all duration-300 ease-out ${isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-6 opacity-0'
              }`}
          >

            <ul className="flex flex-1 list-none flex-col gap-1 bg-surface-container-high rounded-xl p-2">
              {NAV_ITEMS.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={`mobile-${link.path}`}>
                    <Link
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`block rounded-xl px-4 py-3 text-base uppercase font-mono  transition-all duration-200 ${isActive
                          ? 'bg-primary/15 text-on-surface font-black'
                          : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface font-medium'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="flex justify-end-safe items-center gap-2 pt-4">
              <Button onClick={closeMobileMenu} variant="ghost" className="text-base">
                <p className='text-lg'>Hire Me</p>
              </Button>
              <Button
                variant="ghost"
                onClick={handleToggle}
                aria-label="Toggle Theme"
                title="Toggle Theme"
                className="p-0"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  )
}

export default Navbar
