import { FaReact } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';
import issuestracker from '@/public/issuestracker.png';
import AnimeSite from '@/public/AnimeSite.png';
import Projects from '@/public/Projects.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated ',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: '',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: '',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

// Projects Section
export const projectsData = [
  {
    title: 'Issue Tracker',
    description:
      'A full-stack, production-grade issue tracker that lets you Create, view, update, and delete an issue',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Radix-Ui/Themes',
      'Prisma',
      'MySql',
    ],
    imageUrl: issuestracker,
  },
  {
    title: 'Anime Studio',
    description: 'Server-side app with infinite-scrolling using Framer-Motion',
    tags: ['Next14', 'React', 'Framer-motion', 'TypeScript'],
    imageUrl: AnimeSite,
  },
  {
    title: 'Project-tracker',
    description:
      'An app to keep track of my projects, I can Create,Read,Update, and Delete using server actions in NextJs 14',
    tags: [
      'Nextjs 14',
      'Tailwind',
      'shadcn/ui',
      'TypeScript',
      'Prisma ORM',
      'SQLite',
    ],
    imageUrl: Projects,
  },
];

// Skills i have learned
export const skillsData = [
  'Git',
  'JavaScript',
  'Typescript',
  'Tailwind ',
  'React',
  'Next.js',
  'MongoDB',
  'PostgresSQL',
  'Prisma',
  'Framer Motion',
  'Python',
  'Java',
  'SQL',
] as const;
