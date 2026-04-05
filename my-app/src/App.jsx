import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Core components
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const LandingPage = lazy(() => import('./components/Landing'));
const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/home/Home'));
const Features = lazy(() => import('./components/Features'));
const Signin = lazy(() => import('./components/Sign-up'));
const Support = lazy(() => import('./components/Support'));
const Explorepage = lazy(() => import('./components/ExplorePage'));
const Profile = lazy(() => import('./components/Profile'));
// New enhanced components
const HeroSection = lazy(() => import('./components/HeroSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));
// Footer components
const About = lazy(() => import('./components/footer/About'));
const Careers = lazy(() => import('./components/footer/Careers'));
const Press = lazy(() => import('./components/footer/Press'));
const Affiliates = lazy(() => import('./components/footer/Affiliates'));
const Blog = lazy(() => import('./components/footer/Blog'));
const Study = lazy(() => import('./components/footer/Study'));
const Practice = lazy(() => import('./components/footer/Practice'));
const Privacy = lazy(() => import('./components/footer/Privacy'));
const Terms = lazy(() => import('./components/footer/Terms'));
const Cookie = lazy(() => import('./components/footer/Cookie'));
const FAQ = lazy(() => import('./components/footer/FAQ'));
// Course components
const Html = lazy(() => import('./components/courses/Html'));
const CSS = lazy(() => import('./components/courses/Css'));
const Javascript = lazy(() => import('./components/courses/Javascript'));
const Nodejs = lazy(() => import('./components/courses/Node'));
const Reactjs = lazy(() => import('./components/courses/React'));
const Mongodb = lazy(() => import('./components/courses/Mongodb'));
const Aws = lazy(() => import('./components/courses/Aws'));
const Azure = lazy(() => import('./components/courses/Azure'));
const Gcp = lazy(() => import('./components/courses/Gcp'));
const Flutter = lazy(() => import('./components/courses/Flutter'));
const Python = lazy(() => import('./components/courses/Python'));
const Django = lazy(() => import('./components/courses/Django'));
const Flask = lazy(() => import('./components/courses/Flask'));
const Java = lazy(() => import('./components/courses/Java'));
const Spring = lazy(() => import('./components/courses/Spring'));
const Hibernate = lazy(() => import('./components/courses/Hibernate'));
const ML = lazy(() => import('./components/courses/Ml'));
const Dl = lazy(() => import('./components/courses/Dl'));
const AI = lazy(() => import('./components/courses/Ai'));
const C = lazy(() => import('./components/courses/C'));
const Cpp = lazy(() => import('./components/courses/C++'));
const Php = lazy(() => import('./components/courses/Php'));
const Dbms = lazy(() => import('./components/courses/Dbms'));
const Sql = lazy(() => import('./components/courses/Sql'));

// Assignment components
const Mlassign = lazy(() => import('./components/Assignment/Mlassign'));
const Dlassign = lazy(() => import('./components/Assignment/Dlassign'));
const Aiassign = lazy(() => import('./components/Assignment/Aiassign'));
const Flutterassign = lazy(() => import('./components/Assignment/Flutterassign'));
const Pyassign = lazy(() => import('./components/Assignment/Pyassign'));
const Djassign = lazy(() => import('./components/Assignment/Djassign'));
const Flaskassign = lazy(() => import('./components/Assignment/Flaskassign'));
const Javaassign = lazy(() => import('./components/Assignment/Javaassign'));
const Springassign = lazy(() => import('./components/Assignment/Springassign'));
const Hiberassign = lazy(() => import('./components/Assignment/Hiberassign'));
const Htmlassign = lazy(() => import('./components/Assignment/Htmlassign'));
const Cssassign = lazy(() => import('./components/Assignment/Cssassign'));
const Jsassign = lazy(() => import('./components/Assignment/Jsassign'));
const Nodeassign = lazy(() => import('./components/Assignment/Nodeassign'));
const Reactassign = lazy(() => import('./components/Assignment/Reactassign'));
const Mongodbassign = lazy(() => import('./components/Assignment/Mongodbassign'));
const Awsassign = lazy(() => import('./components/Assignment/Awsassign'));
const Azureassign = lazy(() => import('./components/Assignment/Azureassign'));
const Gcpassign = lazy(() => import('./components/Assignment/Gcpassign'));
const Cassign = lazy(() => import('./components/Assignment/Cassign'));
const Cppassign = lazy(() => import('./components/Assignment/Cppassign'));
const Phpassign = lazy(() => import('./components/Assignment/Phpassign'));
const Dbmsassign = lazy(() => import('./components/Assignment/Dbmsassign'));
const Sqlassign = lazy(() => import('./components/Assignment/Sqlassign'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          {/* All other routes with Navbar and Footer */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Explorepage" element={<Explorepage />} /> 
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/About" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/Affiliates" element={<Affiliates/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/Study" element={<Study/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Cookie" element={<Cookie/>}/>
        <Route path="/Html" element={<Html/>}/>
        <Route path="/Css" element={<CSS/>}/>
        <Route path="/Javascript" element={<Javascript/>}/>
        <Route path="/Nodejs" element={<Nodejs/>}/>
        <Route path="/Reactjs" element={<Reactjs/>}/>
        <Route path="/MongoDB" element={<Mongodb/>}/>
        <Route path="/Aws" element={<Aws/>}/>
        <Route path="/Azure" element={<Azure/>}/>
        <Route path="/Gcp" element={<Gcp/>}/>
        <Route path="/Flutter" element={<Flutter/>}/>
        <Route path="/Python" element={<Python/>}/>
        <Route path="/Django" element={<Django/>}/>
        <Route path="/Flask" element={<Flask/>}/>
        <Route path="/Java" element={<Java/>}/>
        <Route path="/Spring" element={<Spring/>}/>
        <Route path="/Hibernate" element={<Hibernate/>}/>
        <Route path="/Ml" element={<ML/>}/>
        <Route path="/Dl" element={<Dl/>}/>
        <Route path="/Ai" element={<AI/>}/>
        <Route path="/C" element={<C/>}/>
        <Route path="/C++" element={<Cpp/>}/>
        <Route path="/Php" element={<Php/>}/>
        <Route path="/Dbms" element={<Dbms/>}/>
        <Route path="/Sql" element={<Sql/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Mlassign" element={<Mlassign/>}/>
        <Route path="/Dlassign" element={<Dlassign/>}/>
        <Route path="/Aiassign" element={<Aiassign/>}/>
        <Route path="/Flutterassign" element={<Flutterassign/>}/>
        <Route path="/Pyassign" element={<Pyassign/>}/>
        <Route path="/Djassign" element={<Djassign/>}/>
        <Route path="/flaskassign " element={<Flaskassign/>}/>
        <Route path="/Javaassign" element={<Javaassign/>}/>
        <Route path="/Springassign" element={<Springassign/>}/>
        <Route path="/Hiberassign" element={<Hiberassign/>}/>
        <Route path="/Htmlassign" element={<Htmlassign/>}/>
        <Route path="/Cssassign" element={<Cssassign/>}/>
        <Route path="/Jsassign" element={<Jsassign/>}/>
        <Route path="/Nodeassign" element={<Nodeassign/>}/>
        <Route path="/Reactassign" element={<Reactassign/>}/>
        <Route path="/Mongodbassign" element={<Mongodbassign/>}/>
        <Route path="/Awsassign" element={<Awsassign/>}/>
        <Route path="/Azureassign" element={<Azureassign/>}/>
        <Route path="/Gcpassign" element={<Gcpassign/>}/>
        <Route path="/Cassign" element={<Cassign/>}/>
        <Route path="/Cppassign" element={<Cppassign/>}/>
        <Route path="/Phpassign" element={<Phpassign/>}/>
        <Route path="/Dbmsassign" element={<Dbmsassign/>}/>
        <Route path="/Sqlassign" element={<Sqlassign/>}/>
                  </Routes>
                </Suspense>
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
      <Analytics />
    </Router>
  );
}
export default App;

