import './app.scss'

import { NavigationBar } from "./components/navigation/NavigationBar.tsx"
import { Spacer } from "./components/spacer/Spacer.tsx"

import { NAVIGATION_ITEMS } from "./data/navigation.ts"

const HomePage: React.FC = () => {
  return (
    <div id="main">
      <div id="body">
        <NavigationBar navigationItems={NAVIGATION_ITEMS} />

        <Spacer height="lg" />

      </div>
    </div>
  )
}

export default HomePage;
