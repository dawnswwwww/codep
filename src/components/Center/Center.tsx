import './Center.css'
import React from 'react'

export default function Center  ({ children }: { children: React.ReactNode }) {
  return (
    <div className="center">
      {children}
    </div>
  )
}