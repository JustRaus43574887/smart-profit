import '../assets/styles/login.scoped.css'
import LoginHeader from '../components/loginComponents/loginHeader';
import LoginBlock from '../components/loginComponents/loginBlock';
import Footer from '../components/dashboardComponents/footer';

function Login() {
  return (
    <div className="background">
      <LoginHeader />
      <LoginBlock />
      <Footer />
    </div>
  );
}

export default Login;
