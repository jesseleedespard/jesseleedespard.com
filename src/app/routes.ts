import { createBrowserRouter, redirect } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Hiring from './pages/Hiring';
import Writing from './pages/Writing';
import Podcast from './pages/Podcast';
import Work from './pages/Work';
import CaseStudyHealthtech from './pages/CaseStudyHealthtech';
import CaseStudyProptech from './pages/CaseStudyProptech';
import CaseStudyWorkBeforeTools from './pages/CaseStudyWorkBeforeTools';
import LeadershipResearchFunction from './pages/LeadershipResearchFunction';
import LeadershipWebStrategy from './pages/LeadershipWebStrategy';
import DesignSystem from './pages/DesignSystem';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'work', Component: Work },
      { path: 'about', Component: About },
      { path: 'hiring', Component: Hiring },
      { path: 'writing', Component: Writing },
      { path: 'podcast', Component: Podcast },
      { path: 'case-studies/healthtech-onboarding', Component: CaseStudyHealthtech },
      { path: 'case-studies/proptech', Component: CaseStudyProptech },
      { path: 'leadership/work-before-the-tools', Component: CaseStudyWorkBeforeTools },
      { path: 'case-studies/work-before-the-tools', loader: () => redirect('/leadership/work-before-the-tools') },
      { path: 'leadership/research-function', Component: LeadershipResearchFunction },
      { path: 'leadership/three-disciplines-one-team', Component: LeadershipWebStrategy },
      { path: 'design-system', Component: DesignSystem },
    ],
  },
]);