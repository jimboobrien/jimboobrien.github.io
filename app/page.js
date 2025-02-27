import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${userData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=20&type=Repositories`);
  const data = await res.json();
  //data.items = data.items.filter(item => item.full_name !== 'jimboobrien/terms-policy-generator');
  const excludedRepos = [
    'jimboobrien/WOOCOMMERCE-CUSTOM-ORDER-SQL-DATA',
    'jimboobrien/react-form-builder',
    'jimboobrien/bootstrap-master',
    'jimboobrien/react-parcel-webpack-starter-template',
    'jimboobrien/form-builder',
    'jimboobrien/jimboobrien',
    'jimboobrien/klipper-configs'
  ];
  data.items = data.items.filter(item => !excludedRepos.includes(item.full_name));


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data;
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      <GitStats />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <GitLanguage />
      <Contributions />
      <Rank />
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();

  return {
    title: `GitHub Profile of ${profile.name}`,
    description: profile.description,
  };
};
