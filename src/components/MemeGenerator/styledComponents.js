// Style your components here
import styled from 'styled-components'

const inputsBorderColor = '#b0b7c2'

export const MainAppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1em;
`
export const ContentContainer = styled.div`
  display: grid;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  width: min(100ch, 100%);
  gap: 1em;
`

export const Heading = styled.h1`
  color: #35469c;
  margin: 0;
  grid-column: 1/-1;
  place-self: flex-start;
  @media (min-width: 576px) {
    margin-left: 0.5em;
  }
`

export const Form = styled.form`
  @media (max-width: 576px) {
    order: 3;
  }
  @media (min-width: 576px) {
    padding: 1em;
  }
`
export const Label = styled.label`
  color: #7e858e;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.4em;
  font-size: 1.1rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${inputsBorderColor};
  display: block;
  margin-block: 0.5em 1.5em;
  &::placeholder {
    color: #979ba3;
  }
`
export const FontSizesContainer = styled.select`
  width: 100%;
  font-size: 1.1rem;
  padding: 0.25em;
  outline: none;
  border: 1px solid ${inputsBorderColor};
  color: #1e293b;
  border-radius: 5px;
  margin-block: 0.5em 1.5em;
`

export const GenerateButton = styled.button`
  outline: none;
  border: none;
  background-color: #2c69ff;
  color: white;
  border-radius: 7px;
  padding: 0.5em 1.2em;
  font-size: 1.1rem;
  cursor: pointer;
`

export const MemeMainContainer = styled.div`
  display: grid;
  place-items: center;
  @media (max-width: 576px) {
    order: 2;
  }
  @media (min-width: 576px) {
    padding: 1em;
  }
`

export const MemeContainer = styled.div`
  position: relative;
  aspect-ratio: 3 / 2;
  width: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`

export const MemeContentContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const MemeText = styled.p`
  font-size: ${props => props.fontSize};
  color: white;
`
