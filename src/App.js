import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        {/* because we're gonna reuse the TodoForm again, so we don't want margin-y 4 */}
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
