import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY, USA",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022 - Present",
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
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
