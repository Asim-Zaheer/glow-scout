import Header from '../app/component/Header';
import Main from '../app/component/Main';
import HowItWork from './component/HowItWork';
import Treatment from './component/Treatment';
import About from './component/About';
import BusinessSignup from './component/BusinessSignup';
import Footer from './component/Footer';
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <HowItWork/>
      <Treatment/>
      <About/>
      <BusinessSignup/>
      <Footer/>
    </div>
  );
}
