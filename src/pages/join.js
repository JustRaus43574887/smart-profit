import '../assets/styles/login.scoped.css'
import LoginHeader from '../components/loginComponents/loginHeader';
import JoinBlock from '../components/joinComponents/joinBlock';
import Footer from '../components/dashboardComponents/footer';

function Login() {
  return (
    <div className="background">
      <LoginHeader />
      <JoinBlock />
      <Footer />
    </div>
  );
}

export default Login;
