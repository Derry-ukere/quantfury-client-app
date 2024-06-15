// routes
import Router from './routes';
import { MotionLazyContainer } from './components/animate';


// test comment

export default function App() {
  return (
    <MotionLazyContainer>
      <Router />
    </MotionLazyContainer>

  );
}