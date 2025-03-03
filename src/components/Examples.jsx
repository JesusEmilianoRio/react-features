import TabButton from './TabButton/TabButton.jsx';
import Section from './Section/Section.jsx';
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
    };
    let getContext = (e) => handleClick(e.target.textContent.toLowerCase());
      
  return (
    <Section title="Examples" id="examples">
        
        <menu>
          <TabButton 
          isSelected={selectedTopic === 'components'}
          onClick={getContext}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={getContext}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={getContext}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={getContext}>State</TabButton>
         
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
    </Section>
  )
}
