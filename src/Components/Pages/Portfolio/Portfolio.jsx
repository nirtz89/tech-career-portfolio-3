import styled from 'styled-components'
import { Page, PrimaryButton } from '../../Features/Common/CommonStyles';
import Project from './Project';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
    background-size: cover;
    position: relative;
`;

const Darken = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    background-color: black;
    opacity: 0.5;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    color: #fff;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`;

const StyledProjects = styled.div`
    display: flex;
    > div {
        margin: 0 16px;
    }
`;

function Home() {
    return (
      <Page>
          <StyledMainPage>
              <Darken></Darken>
              <MainPageBody>
                   <h1>Portfolio</h1>
                  <StyledProjects>
                  <Project name="Project 1" image="https://images.pexels.com/photos/7837083/pexels-photo-7837083.jpeg?auto=compress&cs=tinysrgb&h=250&w=260"/>
                  <Project name="Project 2" image="https://images.pexels.com/photos/7837083/pexels-photo-7837083.jpeg?auto=compress&cs=tinysrgb&h=250&w=260"/>
                  <Project name="Project 3" image="https://images.pexels.com/photos/7837083/pexels-photo-7837083.jpeg?auto=compress&cs=tinysrgb&h=250&w=260"/>
                  <Project name="Project 4" image="https://images.pexels.com/photos/7837083/pexels-photo-7837083.jpeg?auto=compress&cs=tinysrgb&h=250&w=260"/>
                  </StyledProjects>
              </MainPageBody>
          </StyledMainPage>
      </Page>
    );
  }
  
  export default Home;