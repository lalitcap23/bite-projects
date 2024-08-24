import profilepic from './assets/a.jpg';

function Card() {
  return (
    <div className="card">
      <img 
       className="card-image" src={profilepic} 
        alt="profile pic" 
        style={{ width: '10%', height: '5%' }} 
      />
      <h1 className='card-title'>LalitCap</h1>
      <p className='text-sheet'> I am a Blockchain Developer</p>
    </div>
  );
}

export default Card;
