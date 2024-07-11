import HomeSection from "./components/homeSection";
import Layout from "./components/layout";
import ProjectSection from "./components/projectSection";
import WorkSection from "./components/workSection";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <HomeSection />
        </div>
        <div className="lg:col-span-2 space-y-8">
          <WorkSection/>
        </div>
        <div className="lg:col-span-3">
          <ProjectSection />
        </div>
      </div>
    </Layout>
  );
}
