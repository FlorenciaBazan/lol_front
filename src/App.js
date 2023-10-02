import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { Layout } from "antd";
import Footer from './Footer';


function App() {

  return (
    <Layout className="layout">
      <Navbar/>
      <Content/>
      <Footer/>
    </Layout>
  );
}

export default App;