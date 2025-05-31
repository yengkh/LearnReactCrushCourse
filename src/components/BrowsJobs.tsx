import { useState } from "react";
import JobsList from "../data/BrowseJobs.json";
import Card from "./Card";
import { FaMapMarker } from "react-icons/fa";

const BrowsJobs = () => {
  const [showJobDescription, setShowJobDescription] = useState<
    Record<number, boolean>
  >({});

  const description = (description: string, index: number): string => {
    return !showJobDescription[index]
      ? description.substring(0, 100) + "..."
      : description;
  };

  const toggleExpendText = (index: number) => {
    setShowJobDescription((pre) => ({
      ...pre,
      [index]: !pre[index],
    }));
  };
  return (
    <>
      <h1 className="text-center text-4xl">Browse Jobs</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {JobsList.map((item, index: number) => (
          <Card bg="bg-gray-100" key={index}>
            <p className="text-gray-500 text-xs">{item.type}</p>
            <p className="font-bold text-lg">{item.title}</p>
            <p className="mt-2 ">{description(item.description, index)}</p>
            <button
              className="text-indigo-500 cursor-pointer my-4"
              onClick={() => toggleExpendText(index)}
            >
              {showJobDescription[index] ? "Less" : "More"}
            </button>
            <p className="text-sm text-violet-600">{item.salary} /Year</p>
            <hr className="my-1 text-gray-400" />
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <p className="mt-5 mb-2  text-red-600 text-sm">
                <FaMapMarker className="inline text-lg mb-1" />
                <span>{item.location}</span>
              </p>
              <a
                href={`job/${item.id}`}
                className="w-fit py-1 rounded bg-blue-600 text-white px-3 "
              >
                Read More
              </a>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default BrowsJobs;
