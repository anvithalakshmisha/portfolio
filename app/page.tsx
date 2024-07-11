import Badge from './components/badge';
import HomeSection from './components/homeSection';
import Layout from './components/layout';
import Section from './components/section';

export default function Home() {
  return (
    <Layout>
      <HomeSection></HomeSection>

      <Section id="work" title="Work Experience">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">WHOOP - Software Engineer Co-op</h3>
            <p className="text-gray-700">Jan 2023 – Sept 2023</p>
            <Badge text="React"></Badge>
            <Badge text="NextJS"></Badge>
            <Badge text="TypeScript"></Badge>
            <Badge text="Gatsby"></Badge>
            <Badge text="GA4"></Badge>
            <Badge text="GTM"></Badge>
            <Badge text="NPM"></Badge>
            <Badge text="Babel"></Badge>
            <Badge text="React context"></Badge>
            <Badge text="shopify scripts"></Badge>
            <Badge text="A/B tests"></Badge>
            <Badge text="Rest APIs"></Badge>
            <ul className="list-disc pl-6">
              <li>Developed a NextJS single-page web checkout, facilitating millions in transactions across six regions and three languages.</li>
              <li>Integrated Stripe payment functionality and optimized state management with React Context for enhanced performance.</li>
              <li>Automated replacement device purchases via Ruby script updates in Shopify, saving $200K/year in customer support tickets.</li>
              <li>Conducted A/B tests on storefront product cards and carousels, increasing average revenue per user with the best-performingvariant.</li>
              <li>Leveraged Storybook to develop and maintain reusable React components for high-traffic areas with a million visits permonth like checkout and storefront.</li>
              <li>Engineered RESTful APIs in Java for initial checkout calculations based on six regional tax structures.</li>
              <li>Configured GA4 and GTM to track user behavior, automate event tracking and monitor e-commerce metrics.</li>
              <li>Integrated out-of-stock notifications with Klaviyo to provide accurate email lists for timely customer restock alerts.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Siemens Technology - Software Engineer</h3>
            <p className="text-gray-700">Jul 2019 - Dec 2021</p>
            <Badge text="Typescript"></Badge>
            <Badge text="Angular"></Badge>
            <Badge text="Java"></Badge>
            <Badge text="Jest"></Badge>
            <Badge text="Karma"></Badge>
            <Badge text="NgRx"></Badge>
            <Badge text="Agila"></Badge>
            <ul className="list-disc pl-6">
              <li>Collaborated with a team of nine in an Agile setting, contributing to efficient sprint planning and delivery.</li>
              <li>Reduced effective page load time by 60% through the implementation of paging and state management using Angular and NgRx, integrated with Java-based REST APIs.</li>
              <li>Increased search efficiency of assets across different plants by over 1 second through optimization of TypeScript code.</li>
              <li>Achieved 90% unit test coverage for web components using Jasmine and Jest, ensuring robustness and reliability.</li>
              <li>Reduced technical debt by 60% in an Angular and TypeScript project by resolving issues flagged by SonarQube, enhancingmaintainability and scalability.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">Travel Diary application <a href="https://github.com/anvithalakshmisha/traveldiary" target="_blank" className="text-blue-600 hover:underline font-bold">↗</a></h3>
            <Badge text="Swift"></Badge>
            <Badge text="XCode"></Badge>
            <Badge text="UIKit"></Badge>
            <Badge text="CoreData"></Badge>
            <Badge text="CoreLocation"></Badge>
            <Badge text="MapKit"></Badge>
            <Badge text="Storyboards"></Badge>
            <Badge text="View Controllers"></Badge>
            <p>
              Developed a Travel Diary App in Swift with Storyboards, featuring interactive maps using MapKit and Core Location for visual travel route representation and current location tracking. 
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Job Application tracker database <a href="https://github.com/anvithalakshmisha/JobApplicationTrackerDatabase" target="_blank" className="text-blue-600 hover:underline font-bold">↗</a></h3>
            <Badge text="MySQL"></Badge>
            <Badge text="PowerBI"></Badge>
            <Badge text="ERD"></Badge>
            <p>
              Implemented a MySQL job application tracker database with ERD diagrams and PowerBI for enhanced data analysis.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Cloud-Based Result Management System <a href="https://github.com/anvithalakshmisha/cloudClass" target="_blank" className="text-blue-600 hover:underline font-bold">↗</a></h3>
            <Badge text="NodeJS"></Badge>
            <Badge text="AWS CloudFormation"></Badge>
            <Badge text="EC2"></Badge>
            <Badge text="S3"></Badge>
            <Badge text="SNS"></Badge>
            <Badge text="CI/CD"></Badge>
            <Badge text="AMI"></Badge>
            <p>
              Developed a cloud-based result management system with NodeJS, AWS EC2, and AWS CloudFormation. 
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Sprint Planner <a href="https://github.com/anvithalakshmisha/sprintPlanner" target="_blank" className="text-blue-600 hover:underline font-bold">↗</a></h3>
            <Badge text="React"></Badge>
            <Badge text="Javascript"></Badge>
            <Badge text="HTML"></Badge>
            <Badge text="CSS(SASS)"></Badge>
            <Badge text="NodeJS"></Badge>
            <Badge text="ExpressJS"></Badge>
            <Badge text="MongoDB"></Badge>
            <Badge text="Mangoose"></Badge>
            <Badge text="MaterialUI"></Badge>
            <Badge text="PlotlyJS"></Badge>
            <Badge text="Redux"></Badge>
            <p>
              A sprint planner organizes tasks through statuses and transitions in an issues lifecycle, aligning with agile methodologies for scrum teams. It tracks software issues and bugs, offers graphical progress tracking, customizable issue filtering, email notifications, stakeholder connectivity, and ticket linking for streamlined issue resolution.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
