import { createActionsHook, createStateHook } from "overmind-react";

const useAppState = createStateHook();
const useActions = createActionsHook();

function App() {
  const state = useAppState();
  const actions = useActions();
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>increase</button>
    </div>
  );
}

export default App;
