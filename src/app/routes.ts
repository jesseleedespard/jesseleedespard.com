import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Hiring from './pages/Hiring';
import Writing from './pages/Writing';
import Podcast from './pages/Podcast';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
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
      { path: 'case-studies/healthtech-onboarding', Component: CaseStudy },
      { path: 'design-system', Component: DesignSystem },
    ],
  },
]);