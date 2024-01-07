import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

export const aboutData = [
  {
    icon: <User2 size={20} />,
    text: "Tushar Upadhyay",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "8965238566",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tusharupadhyay690@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 05 Apr 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Dau Dayal Institute of Vocational Education",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Hathras,UP, India",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Dau Dayal Institute of Vocational Education",
        qualification: "Master of Science",
        years: "2018 - 2020",
      },
      {
        university: "Dau Dayal Institute of Vocational Education",
        qualification: "Bachelor of Science",
        years: "2013 - 2017",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "MentorAide",
        role: "Frontend Developer",
        years: "2023 August - 2024 January",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "JavaScript, CSS,",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/figma.svg",
      },
      {
        imgPath: "/assets/about/.svg",
      },
    ],
  },
];
