
const StudentCard = ({ student,onclickcustom }) => {
  return (
    <div  onClick={onclickcustom} className=" bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-110  flex flex-col justify-center items-center px-4 py-2 rounded-xl shadow-lg  mb-4">
      <div>
        <img src={student.image} alt="images" className="rounded-full h-30 "/>
      </div>
      {/* <h3 className="text-xl font-bold mb-2">Student Info</h3> */}
      <p className="text-lg">
        <span className="font-bold text-gray-500 hover:text-black text-xl"> {student.name}</span> 
      </p>
    </div>
  );
};

export default StudentCard;
