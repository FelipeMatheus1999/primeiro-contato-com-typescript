import { Container } from "./styles";

interface CardProps {
  name: string;
  age: string;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <Container>
      <span>name: {name}</span>
      <span>age: {age}</span>
      <span>hobby: {hobby}</span>
    </Container>
  );
};

export default Card;
