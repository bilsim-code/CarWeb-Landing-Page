import {useState, useEffect} from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
function App() {
  let heroData = [
    {
      text1: "Dive into", 
      text2: "What you love"
    },
    {
      text1: "Indulge",
      text2: "your passions"
    },
    {
      text1: "Give in to",
      text2: "your passions"
    }
  ]

  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    let setCountInt =  setInterval(() => {
     setHeroCount((c) => c === 2 ? 0 : c + 1)
    }, 3000)

    return() => clearInterval( setCountInt )
  }, [])

  return (
    <>
    <Background
    playStatus={playStatus}
    heroCount= {heroCount}
    />
    <Navbar/>
    <Hero
    setHeroCount={setHeroCount}
    setPlayStatus={setPlayStatus}
    heroCount={heroCount}
    heroData={heroData[heroCount]}
    playStatus={playStatus}
    />
    </>
  )
}

export default App