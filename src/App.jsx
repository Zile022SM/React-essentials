import "./App.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";



function App() {

  return (
    <div>
      
      <Header />

      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>

            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />

            {/* short way to send values as props, they match the keys from the object or array  */}
            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
