import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import photostore from '@/public/photostore.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import issuetracker from '@/public/issuetracker.png';
import ringcamai from '@/public/ringcamai.png';
import sociallogin from '@/public/sociallogin.png';

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
  // {
  //   name: 'Experience',
  //   hash: '#experience',
  // },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'An application where you can upload pictures, like, and delete, used SupabaseDB for storage.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'issue-tracker',
    description:
      ' Welcome to Issue-tracker a powerful and user-friendly CRUD application designed to streamline your data management needs. Whether youre a business looking to organize your products, tracking tasks.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Tailwind', 'Radix-ui'],
    imageUrl: issuetracker,
  },
  {
    title: 'Photostore',
    description:
      'An instagram like application where you can upload pictures, like, and delete',
    tags: ['React', 'Next.js', 'SupabaseDB', 'Tailwind', 'Prisma'],
    imageUrl: photostore,
  },
  {
    title: 'RingCam-Ai',
    description:
      'Ai-powered web app using ShadcnUI & Next.js 14.  Incorporating OpenAi Technology TensorflowJS.',
    tags: ['React', 'Next.js', 'Tailwind', 'TensorFlowJs', 'shadcn-ui'],
    imageUrl: ringcamai,
  },
  {
    title: 'Social Login',
    description:
      'program implementing user authentication in a nextjs app incorporate social authentication into your Next.js applications, enabling them to leverage the power of SupabaseDB for enhanced user authentication experiences.',
    tags: ['OAuth', 'Supabase'],
    imageUrl: sociallogin,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Framer Motion',
  'MongoDB',
  'MySql',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
] as const;
