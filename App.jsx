import Header from "./Header.jsx";
import Student from "./student.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx"; 

function App() {
  return (
    <> 
      <Header />
      <Student name="Lalit" age ="21" isstudent={true} />
      <Student/>
      <Food />
      <Card />
      <Footer />
      <Button />  

    </>
  );
}

export default App;
