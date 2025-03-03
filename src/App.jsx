import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import './components/Header/Header.css';
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);

  };
  let getContext = (e) => handleClick(e.target.textContent.toLowerCase());
  
  
  return(
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>

          <ul>
            {CORE_CONCEPTS.map((concepts) => 
              <CoreConcept key={concepts.title} {...concepts} />
            )}
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={getContext}>Components</TabButton>

            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={getContext}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={getContext}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={getContext}>State</TabButton>
           
          </menu> 
          {!selectedTopic ? (<p>Please select a topic.</p>): 
          (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
        </section>
       
      </main>
    </div>
  );  
}



export default App
