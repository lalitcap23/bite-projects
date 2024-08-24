import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isstudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isstudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest prop component",
  age: 0,
  isstudent: false,  
};

export default Student;
