import { useState } from 'react'
import './App.css'
import { LineComponent } from './business/line/component/LineComponent'

type Action = "get"

const App = () => {
  const [action] = useState<Action>("get")

  const showActionComponent = () => {
    switch (action) {
      case "get": return <LineComponent />
    }
    
  }

  return (
    <div>
    {showActionComponent()}
    </div>
  )
}

export default App
