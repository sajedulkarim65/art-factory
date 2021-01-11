
// Third Party Modules
import { Helmet } from 'react-helmet'

// // Router 
// import AppRouter from './router'

//  Import Assets
import Home from '../pages/home'
import "../assets/images/banner-bg.png";
// import "../../assets/images/banner-bg.png";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <title>Art Factory</title>
      </Helmet>
      {/* <AppRouter /> */}
      <Home />
    </div>
  );
}

export default App;
