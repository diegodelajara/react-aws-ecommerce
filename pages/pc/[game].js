import React from 'react'
import { useRouter } from 'next/router'

export default function Game() {
  const router = useRouter()
  const game = router.query.game
  return (
    <div>
      <h1>Estamos en el juego: { game } </h1>
    </div>
  )
}
