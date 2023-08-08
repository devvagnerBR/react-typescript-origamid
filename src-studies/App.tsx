import './styles/sass.scss'
import Inference from './content/inference'
import Props_ from './content/props'
import Exercise_01 from './content/exercicio1'
import InterfacesAndTypes from './content/interfaces-type'
import Exercise_02 from './content/exercicio2'
import Events from './content/events'
import States from './content/use-state'
import Exercise_03 from './content/exercicio3'
import Effect from './content/use-effect'
import Ref from './content/use-ref'
import CustomHook from './content/custom-hook'
import FetchCustomHook from './content/use-fetch'
import Context from './content/use-context'
import UiContextProvider from './content/use-context/ui-context'
import Exercise_04 from './content/use-context/exercicio4'


function App() {

  return (
    
    <UiContextProvider>
      <div className='flex items-center justify-center'>
        {/* <Inference /> */}
        {/* <Props_ /> */}
        {/* <Exercise_01 /> */}
        {/* <InterfacesAndTypes /> */}
        {/* <Exercise_02 /> */}
        {/* <Events /> */}
        {/* <States /> */}
        {/* <Exercise_03 /> */}
        {/* <Effect /> */}
        {/* <Ref /> */}
        {/* <CustomHook /> */}
        {/* <FetchCustomHook /> */}
        {/* <Context /> */}
        <Exercise_04/>
      </div>
    </UiContextProvider>
  )
}

export default App
