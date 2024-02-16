import Expos from './components/sections/expos/Expos'
import Hero from './components/sections/hero/Hero'
import './style/App.css'

function App () {
  return (
    <main className='web'>
      <Hero occupation={'Estudiante'} institution={'Universidad Antonio Nariño'} />
      <Expos />
    </main>
  )
}

export default App
