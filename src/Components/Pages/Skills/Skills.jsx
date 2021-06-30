import styled from 'styled-components'
import { colors, Page, VerticalLine } from '../../Features/Common/CommonStyles';
import SkillBar from '../../Features/Common/SkillBar';

const StyledAboutMePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 173.6px);
    justify-content: flex-start;
    align-items: center;
    color:  ${colors.secondaryFontColor};
    h2 {
        font-size: 30px;
    }
    p {
        color: ${colors.mutedFontColor};
        text-align: center;
        font-weight: 400;
    }
`;

const AboutMeBody = styled.div`
    width: 100%;
    min-height: 400px;
    margin-top: 16px;
    display: flex;
`;

const AboutMeImage = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
        border-radius: 32px;
        height: 80%;
    }
`;

const AboutMeDetails = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    flex-direction: column;
    span {
        display: inline-block;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 20px;
    }
    h3 {
        color: ${colors.secondaryFontColor};
        font-size: 24px;
    }
    p {
        margin-bottom: 16px;
        width: 75%;
        text-align: left;
    }

`;

const StyledSignature = styled.img`
    width: 150px;
    margin-bottom: 20px;
    margin-top: 16px;

`;

const StyledSkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Skills() {
    return (
        <Page>
            <StyledAboutMePage>
                <h2>About Me</h2>
                <VerticalLine />
                <p>my skills:<br />
                develope skills:<br /> i learned in full stuck: HTML, JAVASCRIPT, C#, REACT.<br />
                professional skills:<br /> ====== <br />
                personal skills:<br /> Has good interpersonal skills, ability to work under pressure, high work ethic and service consciousness.<br />
                Previous positions required the ability to work independently, teamwork and multiple investment.
                </p>
                <AboutMeBody>
                    <AboutMeImage>
                        <img src="img/mePic.jpg" alt="About me" />
                    </AboutMeImage>
                    <AboutMeDetails>
                        <span>Hello & Welcome</span>
                        <h3>MY PROJECT.</h3>
                        <span>Full Stuck Developer • Junior • </span>
                        {/* <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p> */}
                        <StyledSignature src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/7323792/original/aa2088c6b8d140c8e3b3006d21a9f74c7a2cd949/extract-1-to-4-signatures-to-transparent-png-image.png" alt="signature" />

                    </AboutMeDetails>
                </AboutMeBody>
            </StyledAboutMePage>
            <StyledSkillContainer>
                <SkillBar skillName="React" skillLevel={80} />
                <SkillBar skillName="CSS" skillLevel={60} />
                <SkillBar skillName="Styled Components" skillLevel={90} />
                <SkillBar skillName="C#" skillLevel={85} />
            </StyledSkillContainer>
        </Page>
    );
}

export default Skills;