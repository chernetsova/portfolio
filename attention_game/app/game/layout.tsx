import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Игра на внимание",
  description: "Игры для детей дошкольного возраста",
}

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
     
  )
}