import styled from 'styled-components'
import { Page, PrimaryButton } from '../../Features/Common/CommonStyles';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    position: relative;
`;

const Darken = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    background-color: black;
    opacity: 0.1;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`;

const MainPageHeaderLight = styled.span`
    font-weight: 400;
    opacity: 0.75;
`;

const MainPageHeaderDetails = styled.h2`
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 32px;
`;

const CruselaPic  =styled.div`

`

function Home() {
    return (
      <Page>
          <StyledMainPage>
              <Darken></Darken>
              <MainPageBody>
              <MainPageHeaderLight>
                    <h1>I AM Chen Zauda</h1>
                    <MainPageHeaderDetails>chen zauda 25 years old from q.gat. 
                        my expiernce in fullstuck:
                        html,
                        c# ,
                        javascript,
                        react
                    </MainPageHeaderDetails>
                    <PrimaryButton>Download CV</PrimaryButton>
                    </MainPageHeaderLight>
              </MainPageBody>
          </StyledMainPage>
      </Page>
    );
  }
  
  export default Home;