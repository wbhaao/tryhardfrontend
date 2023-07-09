import '../Exam.css';

function Exam(params) {
  function Header(props) {
    return (
      <span >
        <h1>TRYHARD</h1>
        <span className='profile'>
          <div className='profileImage'></div>
          <div className='profileInfo'>
            <div className='profileJob'>STUDENT</div>
            <div className='profileName'>햄토리</div>
          </div>
        </span>
      </span>
    );
  }
  function Paper(props) {
    return (
      <div>
        <h1 className="progress">1/10</h1>
        
      </div>
    );
  }
  return (
    <div className='container'>
      <Header/>
      <Paper/>
    </div>
  )
}  
export default Exam