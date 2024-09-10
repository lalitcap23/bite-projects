import Header from "./Header.jsx";
import List from "./list.jsx"
import Student from "./student.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import UserGreeting from "./userGreeting.jsx";
import Button1 from "./button1.jsx";
import Pp from "./pp.jsx";
import Mycomponent from "./mycomponet.jsx"
import Counter from "./counter.jsx";
import Component from "./component.jsx";
import Cc from "./cc.jsx";

function App() {
  return (
    <> 
      <UserGreeting islogin={true} username="jarry"/>
      <Header />
      <Student name="Lalit" age ="21" isstudent={true} />
      <Student/>
      <Card />
      <Footer />
      <Component/>
            <List />
      <Button1/>
      <Mycomponent/>
      <Counter/>
      <Cc/>
          <pp/>

    </>
  );
}

export default App;
