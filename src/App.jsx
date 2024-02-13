import './App.css';
import SectionHeading from './components/ReusableHeading';

function App() {

  return (
    <div className='page-wrapper'>

      <SectionHeading
        tagline="About Us"
        SectionTitle="Almost every major <span>economy around</span> the global"
        SectionIntro="SMEs are the backbone of almost every major economy around the globe! SMEs are the backbone of almost every major economy around the globe!"
      />
      
    </div>
  )
}

export default App
