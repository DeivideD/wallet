import { Container } from "./style";

interface Props {
  title: string;
  image: string;
  value: number;
  className?: boolean;
}

export function Summary(props: Props) {
  return (
    <Container>
      <div className={props.className ? "diferent" : ""}>
        <header>
          <p>{props.title}</p>
          <img src={props.image} />
        </header>
        <strong>R$ {props.value}</strong>
      </div>
    </Container>
  );
}