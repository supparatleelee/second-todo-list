import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

import TodoContextProvider from './contexts/TodoContext';

//create it here because we need to create <ContextObject.Provider>
// const ContextObject = createContext();

function App() {
  // const [state, setState] = useState(''); // if we put state in ContextObject's child elements, all of the elements will be re-render = need to determind which state to put inside.
  return (
    // put whatever we want to use the ContextObject with in the <ContextObject.Provider>
    // <ContextObject.Provider value={{ name: 2000 }}>
    // the child component insides the <ContextObject> will be able to use the value of 2000 only
    <TodoContextProvider>
      {/* props.children START */}
      <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
        <div className="my-4">
          <TodoForm />
        </div>
        <TodoContainer />
      </div>
      {/* props.children END */}
    </TodoContextProvider>
    // </ContextObject.Provider>
  );
}

export default App;
// export { ContextObject };
