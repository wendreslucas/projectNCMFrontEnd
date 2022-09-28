import {
  Container,
  BottomMenu,
  Movie,
  Persons,
  StarShip,
  PlanetsIcon,
  Car,
} from './styles';

function Main() {
  return (
    <Container>
      {/* <CharacterPage /> */}
      <BottomMenu>
        <Movie />
        <Persons />
        <StarShip />
        <PlanetsIcon />
        <Car />
      </BottomMenu>
    </Container>
  );
}
