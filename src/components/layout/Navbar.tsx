import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { path: '/', label: 'Repo' },
  { path: '/about', label: 'Tech_Stack' },
  { path: '/experience', label: 'Contributions' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Handler' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  return (
    <nav className="bg-surface-container-low border-outline-variant fixed top-0 z-50 flex w-full items-center justify-between border-b px-6 py-3">
      {/* Logo */}
      <div className="text-on-surface flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-on-background font-mono text-xl font-black tracking-tight">
            BIBHUTI.SUNARI
          </span>
        </Link>
      </div>

      {/* Links */}
      <ul className="hidden list-none gap-8 md:flex">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-label relative pb-1 text-[0.9375rem] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                } group`}
              >
                {link.label}
                {/* Underline anim */}
                <span
                  className={`bg-primary absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost">Hire Me</Button>

        <Button
          variant="ghost"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          title="Toggle Theme"
          className="p-0"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
          <img
            src="src\assets\IMG-1660.jpg"
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
