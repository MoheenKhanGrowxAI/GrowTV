import React, { useContext, useEffect } from "react";
import "./Teams.css";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Context } from "../../Context";

function Teams() {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      setContext(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "100%",
      }}
      animate={{
        opacity: 1,
        y: "0%",
      }}
      transition={{ duration: 1.5 }}
      className="teams-page body-wrapper"
    >
      <motion.div
        className="teams-page-hero"
        style={{
          backgroundImage: `url("./images/team-bg.png"),url("./images/team-group.png")`,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 220,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="teams-page-hero-content"
          >
            <h1>
              <span className="our">OUR</span>
              <span className="team">TEAM</span>
            </h1>
            <a href="#team-members">
              <img
                src="./images/bottom-arrow.png"
                alt="Bottom"
                className="img-fluid"
              />
            </a>
          </motion.div>
        </Container>
      </motion.div>

      {/* team-members */}
      <div className="team-members py-5" id="team-members">
        <Container>
          <div className="member ps-md-4">
            <div className="row ">
              <div className="col-md-6 align-self-center">
                <h1>Jerry “JayD”</h1>
                <p>
                  Our co- Founder, CEO Jerry “JayD” Dababneh  is a Detroit native that stands as a leading national voice in the advocacy and growth of the global cannabis market. Jerry, also known as JayD Daba, is a founder, serial entrepreneur, visionary, thought leader, philanthropist, humanitarian, and a passion filled advocate for the federal legalization of the marijuana plant and the release of 40,000 prisoners still wrongly incarcerated behind its criminalization. His missions are often quoted to be his vision to: “Free The Plant” which he believes is the catalyst to freeing all still incarcerated from it. He believes, freeing of the plant will give way to breaking the negative stigmas still surrounding the plant, ultimately shattering barriers to: “Free The 40k”. JayD’s entry into the cannabis technology space came in 2016 through the financial sector of the industry. As a former financial advisor and estate planner to multiple athletes, entertainers and prominent CEO/Founders over the last 20 years in his career, building his practice around the principles of asset protection and the transitioning of generational wealth for his clients.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="./images/jerry.jpg"
                  className="img-fluid"
                />
                
              </div>
            </div>
          </div>
          <div className="member pe-md-4">
            <div className="row ">
              <div className="col-md-6">
                <img
                  src="./images/kamranali.enc"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 align-self-center">
                <h1>Kamran Ali</h1>
                <p>
                  Kamran Serves As The Chief Technology Officer (CTO) At GrowX A.I Technologies, (GXAI). Throughout His Career, Kamran Has Excelled In Overcoming Challenges In Global Software Development (GSD). His Expertise In Improving Human-Computer Interaction Has Significantly Enhanced The Efficiency And Effectiveness Of Software Development Processes. In His Pursuit Of Excellence, Kamran Is Actively Engaged In Research On Human Computing Interaction, Aiming To Enhance The Grower's Experience By Leveraging Advanced Technology. With A Passion For Innovation And A Drive To Provide Growers With The Best Possible Tools, Kamran Continues To Lead The Way In Delivering Groundbreaking Technology Solutions. His Dedication To Empowering Growers And His Relentless Pursuit Of Excellence Make Him A Valuable Asset To The GrowX A.I Technologies. One Of Kamran's Notable Accomplishments Is His Contribution To The Development Of HomeGrown Pros (HGP), An All-Inclusive Online Platform Specializing In Hydroponic Gardening Supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="member ps-md-4">
            <div className="row ">
              <div className="col-md-6 align-self-center">
                <h1>JAS HALL, CCO OR COO,</h1>
                <p>
                  Jas Hall Is A Multimedia Producer And Scientist. Jas Has A Bachelor Of Science In Agriculture And Food Sciences From Florida Agricultural & Mechanical University. She Has An Extensive Background In Translational And Clinical Research. She Is A Published Researcher With Experiences With LSU Medical, Tulane Medical, USDA, And The United States Air Force. Jas Has Extensive Production And Development Experience In The Fields Of Television, Film, Technology, Music, Product, And Immersive Reality. “HGXTV Has A Passion For The Process, Growth Is Inevitable With This Company. Let’s GREAUXXXXX” Jas Hall
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="./images/member-images4.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="member pe-md-4">
            <div className="row ">
              <div className="col-md-6">
                <img
                  src="./images/DRmemberimages2.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 align-self-center">
                <h1>DEAN GELFAND</h1>
                <p>
                  Mr. Dean Gelfand, Senior Strategic Advisor At HgxTV Comes Highly Regarded As A Brand Builder, Business Leader, PRODUCER With A Very Special And Eclectic Entrepreneurial Background. Most Recently Dean Was The Executive Producer For Jerry Garcia, Artist. A Feature Documentary Based On A 1987 Interview Directed By Malcolm Leo And Filmed At Front Street Studio In San Rafael, California. Mellowdee, A Unique Marketing And Production Entity Currently Developing Music-Related Projects Drawn From Producer & Director Malcolm Leo's Enormous Rock And Pop-Culture Film And Video Holdings. With Vast Experiences In Media Across Multiple Verticals Dean World Is Unique And Rich With Global And Iconic Experiences. Formally The Founder & CEO Dreamer Media LLC. There Dean Structured, Built, And Sold A Full-Service Entertainment Consumer Products Marketplace. Dean Secured Investors And Strategic Partners, Accelerated Growth, Scaled Operations, And Accomplish Mergers & Acquisitions. Over A Decade, Dean Cultivated A Senior Executive Team (4) And Associates (16), Which Managed The Companies Core Divisions Of Business (7). These Included; Worldwide Live Event Sales (1000 Events Per Year),
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </motion.div>

  );
}

export default Teams;
