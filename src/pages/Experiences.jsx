import { Title } from "../components/Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool, FaStar } from "react-icons/fa";

// interface ExperienceType {
//   title: string;
//   location: String;
//   description: String;
//   responsibilities: String[];
//   period: string;
//   type: "Education" | "Internship" | "Job";
// }

const Experiences = () => {
  const EXPERIENCES = [
    {
      title: "Software Developer",
      location: "AfterClass, Singapore",
      description:
        "AfterClass is the go-to platform for all University students ",
      responsibilities: [
        "Develop new features for AfterClass",
        "Maintain existing infrastructure",
      ],
      period: "Dec 2021 - Present",
      type: "Job",
    },
    {
      title: "Software Developer",
      location: "AfterClass, Singapore",
      description:
        "AfterClass is the go-to platform for all University students ",
      responsibilities: [
        "Develop new features for AfterClass",
        "Maintain existing infrastructure",
      ],
      period: "Dec 2021 - Present",
      type: "Education",
    },
  ];
  return (
    <div>
      <Title>Experiences</Title>
      <VerticalTimeline>
        {EXPERIENCES.map(({ type, ...rest }, idx) => {
          const color =
            type !== "Education" ? "rgb(33, 150, 243)" : "rgb(232, 125, 160)";
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: color, color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
              key={`exp-${idx}`}
              date="2011 - present"
              iconStyle={{
                background: color,
                color: "#fff",
              }}
              icon={type !== "Education" ? <FaBriefcase /> : <FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">{rest.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {rest.location}
              </h4>
              <p>{rest.description}</p>
              <ul>
                {rest.responsibilities.map((val, idx) => {
                  return <li key={idx}>{val}</li>;
                })}
              </ul>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
