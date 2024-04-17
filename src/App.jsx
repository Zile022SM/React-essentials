import "./App.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { useState } from "react";



function App() {

  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton){
       setTabContent(selectedButton);
  }

  return (
    <div>
      
      <Header />

      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept,key) => (

              /*
               regular way
              <CoreConcept key={key} title={concept.title} description={concept.description} image={concept.image} />
              */

              // shorter way
              <CoreConcept key={key} {...concept} />

            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          

         {!tabContent ? <p>Please select a button</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>
                  {EXAMPLES[tabContent].code}
                </code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
