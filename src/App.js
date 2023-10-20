import NormCompo from "./Handson5/NormCompo";
import PureComponents from "./Handson5/PureComponents";
import ParentHOC from "./Handson5/ParentHOC";
import HOCCall from "./Handson5/HOCCall";
import { HOCCallBlue, HOCCallOrange } from "./Handson5/HOCCall";

function App() {
  return (
    <>
      <h3>
        Normal Component :
      </h3>
      <NormCompo/>
      <hr/>
      <h3>
        Pure Component : a pure component is a type of component that if there is any updated in same values it does not rely on state or context changes and only renders based on its props and state. ine these components do not cause re-rendering when the same values are passed thus they improve performance. 
      </h3>
      <PureComponents/>
      <hr/>
      <h3>
        High Order Component(HOC) :a Higher-Order Component (HOC) is a function that takes a component as an input and returns a new component with additional functionality. Essentially, it's a way to reuse component logic and share it between different components.
      </h3>
      <ParentHOC/>
      <HOCCall value={ParentHOC} /> 
      <HOCCallBlue value={ParentHOC}/>
      <HOCCallOrange value={ParentHOC}/>
    </>
  );
}

export default App;
