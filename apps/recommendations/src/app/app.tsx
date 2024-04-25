import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import useStore from 'store/Module';
import { MdOutlineResetTv } from "react-icons/md";

export const App = () => {
  const { count, reset } = useStore();

  return (
    <div className='ui raised segment'>
      <h1>Recommendations</h1>
      <div className='ui two column middle aligned grid'>
        <div className='row'>
          <div className='column'>
            <p className='left floated'>{ count } people liked the Recommendations</p>
          </div>
          <div className='column'>
            <Button onClick={reset} className='right floated'><MdOutlineResetTv /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
