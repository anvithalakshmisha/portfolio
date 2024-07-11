import Badge from "./badge";
import Section from "./section";

const WorkSection = () => (
  <Section id="work" title="Work Experience">
    <div className="space-y-4">
      <div>
        <h3 className="text-xl lg:text-2xl font-bold">
          WHOOP - Software Engineer Co-op
        </h3>
        <p className="text-gray-700">Jan 2023 – Sept 2023</p>
        <div className="py-4">
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
          <Badge text="Stroybook"></Badge>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Developed a NextJS single-page web checkout, facilitating millions
            in transactions across six regions and three languages.
          </li>
          <li>
            Integrated Stripe payment functionality and optimized state
            management with React Context for enhanced performance.
          </li>
          <li>
            Automated replacement device purchases via Ruby script updates in
            Shopify, saving $200K/year in customer support tickets.
          </li>
          <li>
            Conducted A/B tests on storefront product cards and carousels,
            increasing average revenue per user with the best-performingvariant.
          </li>
          <li>
            Leveraged Storybook to develop and maintain reusable React
            components for high-traffic areas with a million visits permonth
            like checkout and storefront.
          </li>
          <li>
            Engineered RESTful APIs in Java for initial checkout calculations
            based on six regional tax structures.
          </li>
          <li>
            Configured GA4 and GTM to track user behavior, automate event
            tracking and monitor e-commerce metrics.
          </li>
          <li>
            Integrated out-of-stock notifications with Klaviyo to provide
            accurate email lists for timely customer restock alerts.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl lg:text-2xl font-bold">
          Siemens Technology - Software Engineer
        </h3>
        <p className="text-gray-700">Jul 2019 - Dec 2021</p>
        <div className="py-4">
          <Badge text="Typescript"></Badge>
          <Badge text="Angular"></Badge>
          <Badge text="Java"></Badge>
          <Badge text="Jest"></Badge>
          <Badge text="Karma"></Badge>
          <Badge text="NgRx"></Badge>
          <Badge text="Agila"></Badge>
        </div>
        <ul className="list-disc pl-6">
          <li>
            Collaborated with a team of nine in an Agile setting, contributing
            to efficient sprint planning and delivery.
          </li>
          <li>
            Reduced effective page load time by 60% through the implementation
            of paging and state management using Angular and NgRx, integrated
            with Java-based REST APIs.
          </li>
          <li>
            Increased search efficiency of assets across different plants by
            over 1 second through optimization of TypeScript code.
          </li>
          <li>
            Achieved 90% unit test coverage for web components using Jasmine and
            Jest, ensuring robustness and reliability.
          </li>
          <li>
            Reduced technical debt by 60% in an Angular and TypeScript project
            by resolving issues flagged by SonarQube, enhancingmaintainability
            and scalability.
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default WorkSection;
