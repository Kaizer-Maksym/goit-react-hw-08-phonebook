import backGround from '../../images/contacts.jpg';
import { Background, HomeContainer } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Background src={backGround} alt="my contacts" />
    </HomeContainer>
  );
};

export default Home;
