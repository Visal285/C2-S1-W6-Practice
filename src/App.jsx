import Header from "./components/Header";
import * as data from "./data.js";
import Scores from "./components/Scores";
function App() {
  return (
    <>

      <Header id="header" batchName={"fake batch name"} />
      



      <main className="scores-container">
        <Scores course_name={"Java"} list_results={data.JAVA_RESULTS} />
        <Scores course_name={"English"} list_results={data.ENGLISH_RESULTS} />
        <Scores course_name={"Python"} list_results={data.PYTHON_RESULTS} />
        <Scores course_name={"HTML"} list_results={data.HTML_RESULTS} />
        
      </main>
     
      
      </>
  );
}

export default App;

