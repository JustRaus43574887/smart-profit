import '../assets/styles/dashboard.scoped.css'
import '../assets/styles/activation.scoped.css'

import Header from '../components/dashboardComponents/dashboardHeader';
import Modals from '../components/activationComponents/activationModals'
import Packages from '../components/activationComponents/packageBlock';
import SystemBlock from '../components/activationComponents/systemBlock';
import Footer from '../components/dashboardComponents/footer';


function Activation() {
  return (
    <>
      <Modals />
      <div className="background">
        <Header />
        <div className="fullscreen_block">
          <Packages />
          <SystemBlock />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Activation;
