import PropTypes from "prop-types";
import styled from "@emotion/styled";

import "./../animation.css";

const ContenedorFrase = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 2rem;

    &::before {
      content: open-quote;
      font-size: 5rem;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
    &::after {
      content: close-quote;
      font-size: 5rem;
      position: absolute;
      right: -1rem;
      bottom: -5rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #666;
    margin-top: 4rem;
  }
`;

const Frase = ({ frase }) => {
  if (Object.keys(frase).length === 0) return null;

  const { quote, author } = frase;

  return (
    // prettier-ignore
    <ContenedorFrase
      key={quote}
      className="fade-in"
    >
      <h1>{quote}</h1>
      <p>- {author}</p>
    </ContenedorFrase>
  );
};

Frase.propTypes = {
  frase: PropTypes.object.isRequired,
};

export default Frase;
