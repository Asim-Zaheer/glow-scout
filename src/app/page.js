// src/pages/index.js
import Header from '../app/component/Header';
import Main from '../app/component/Main';
import HowItWork from './component/HowItWork';
import Treatment from './component/Treatment';
import About from './component/About';
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <HowItWork/>
      <Treatment/>
      <About/>
    </div>
  );
}
