import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero.jsx';
import Layout from './layout/Layout.jsx';
import Input from './Input.jsx';
import Featured from './Featured.jsx';
import Products from './Products.jsx';
import Card from './Card.jsx';
import BlogPost from './BlogPost.jsx';
import UserTestimonial from './UserTestimonial.jsx';
import ProductCard from './ProductCard.jsx';
import Collaboration from './Collaboration.jsx';
import Divider from './Divider.jsx';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Hero />
          <Input />
          <Featured />
          <Products />
          <ProductCard />
          <Collaboration />
          <Divider />
          <UserTestimonial />
          <BlogPost />
          <Card />
        </Layout>
      </Router>
    </>
  );
}

export default App;
