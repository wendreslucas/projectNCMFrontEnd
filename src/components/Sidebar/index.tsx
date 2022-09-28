import StickyBox from 'react-sticky-box';
import { Container, Body } from './styles';

function Sidebar() {
  return (
    <Container>
      <StickyBox>
        <Body>
          {/* <List title="Sugestões" elements={[<GitHub />]} />
          <List elements={[<Linkedin />]} />
          <List title="Trends" elements={[<News />]} /> */}
        </Body>
      </StickyBox>
    </Container>
  );
}
