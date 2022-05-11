import '../assets/styles/login.scoped.css'
import LoginHeader from '../components/loginComponents/loginHeader';
import ForgotBlock from '../components/forgotComponents/forgotBlock';
import Footer from '../components/dashboardComponents/footer';

function Login() {
  return (
    <div className="background">
      <LoginHeader />
      <ForgotBlock />
      <Footer />
    </div>
  );
}

export default Login;
