import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById'

export const HeroScreen = () => {

  const { id } = useParams()

  const hero = getHeroById( id )

  if (!hero) return <Navigate to={'/'}/> //! Navigate se encargar hacer la navegacion

  return (
    <div>
        <h1>Hero Screen</h1>
        <p>
          {hero.superhero}
        </p>
    </div>
  )
}
