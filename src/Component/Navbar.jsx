import { useEffect, useState } from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Profile from "../assets/Romeh.jpg"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about")

  // Scroll Spy Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <Disclosure as="nav" className="fixed w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white">
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <h1 className="text-2xl font-extrabold tracking-wide 
              bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 
              bg-clip-text text-transparent">
              RoMeH
            </h1>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => {
                  const sectionId = item.href.replace("#", "")
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        activeSection === sectionId
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-white",
                        "text-sm font-medium transition duration-300"
                      )}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center">
            <img
              src={Profile}
              alt=""
              className="h-8 w-8 rounded-full border border-yellow-400"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-black/90 px-4 pb-3">
        {navigation.map((item) => {
          const sectionId = item.href.replace("#", "")
          return (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                activeSection === sectionId
                  ? "text-yellow-400"
                  : "text-gray-300",
                "block py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          )
        })}
      </DisclosurePanel>
    </Disclosure>
  )
}