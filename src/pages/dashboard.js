import '../assets/styles/dashboard.scoped.css'
import DashboardHeader from '../components/dashboardComponents/dashboardHeader';
import DashboardMain from '../components/dashboardComponents/dashboardMain/dashboardMain';
import Footer from '../components/dashboardComponents/footer';

function Login() {
  return (
    <div className="background">
      <DashboardHeader />
      <DashboardMain />
      <Footer />
    </div>
  );
}

export default Login;
