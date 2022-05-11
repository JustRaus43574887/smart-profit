import '../assets/styles/login.scoped.css'
import Header from '../components/dashboardComponents/dashboardHeader';
import ProfileScreen from '../components/profileComponents/profileScreen';
import Footer from '../components/dashboardComponents/footer';

function Login() {
  return (
    <div className="background">
      <Header />
      <ProfileScreen />
      <Footer />
    </div>
  );
}

export default Login;
