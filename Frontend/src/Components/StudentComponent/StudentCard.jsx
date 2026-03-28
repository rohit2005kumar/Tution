const StudentCard = ({ student,onclickcustom }) => {
  return (
    <div  onClick={onclickcustom} className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">Student Info</h3>
      <p className="text-lg">
        <span className="font-semibold">Name:</span> {student.name}
      </p>
    </div>
  );
};

export default StudentCard;
