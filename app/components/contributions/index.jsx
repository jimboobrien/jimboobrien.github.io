// @flow strict

import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";


function Contributions() {
  return (
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Activity Graph" />

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username="said7388"
          blockSize={14}
        />
      </div>
      <div className="">
          <p>Most of my contributions, including commits, pull requests, and code reviews, are made in private repositories for the Centers for Disease Control and Prevention (CDC).
          These contributions involve collaborating with various teams to develop and maintain critical software solutions that support public health initiatives, but they are not reflected in my public GitHub profile and/or commit history.
          </p>
        </div>
    </div>
  );
};

export default Contributions;