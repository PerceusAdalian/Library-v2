import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Featured'
import Books from '../components/Books'
import DiscountedBooks from '../components/DiscountedBooks'
import Explore from '../components/Explore'

export default function Home() {
  return (
    <>
        <Landing />
        <main>
            <Highlights />
            <Featured />
            <Books />
            <DiscountedBooks />
            <Explore />
        </main>
    </>
  )
}
