import Card from "./Card";
import Button from "./Button";
const HomeCard = () => {
  return (
    <>
      <Card bg="bg-gray-100">
        <h1 className="text-2xl">For Developers</h1>
        <p>Browse the React jobs and start career today</p>
        <Button title="Browse Jobs" bg="bg-gray-900" />
      </Card>
      <Card bg="bg-indigo-100">
        {" "}
        <h1 className="text-2xl">For Employers</h1>
        <p>List your jobs to find perfect developer for the role</p>
        <Button title="Add Jobs" bg="bg-indigo-500" />
      </Card>
    </>
  );
};

export default HomeCard;
