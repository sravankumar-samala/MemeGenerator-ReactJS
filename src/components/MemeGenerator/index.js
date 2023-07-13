import {useState} from 'react'
import {
  MainAppContainer,
  ContentContainer,
  Form,
  Label,
  Input,
  GenerateButton,
  MemeContainer,
  FontSizesContainer,
  Heading,
  MemeMainContainer,
  MemeContentContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

export default function MemeGenerator() {
  const [inputs, setInputs] = useState({
    url: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOnChangeInput = event => {
    const {name, value} = event.target

    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  const generateMeme = event => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <MainAppContainer>
      <ContentContainer>
        <Heading>Meme Generator</Heading>
        <Form onSubmit={generateMeme}>
          <Label htmlFor="url">Image URL</Label>
          <Input
            type="text"
            id="url"
            name="url"
            value={inputs.url}
            onChange={handleOnChangeInput}
            placeholder="Enter image Url here"
          />
          <Label htmlFor="top-text">Top Text</Label>
          <Input
            type="text"
            id="top-text"
            name="topText"
            value={inputs.topText}
            placeholder="Enter top text"
            onChange={handleOnChangeInput}
          />
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <Input
            type="text"
            id="bottom-text"
            name="bottomText"
            value={inputs.bottomText}
            placeholder="Enter bottom text"
            onChange={handleOnChangeInput}
          />
          <Label htmlFor="font-size">Font Size</Label>
          <FontSizesContainer
            id="font-size"
            // defaultValue="24"
            onChange={handleOnChangeInput}
            name="fontSize"
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </FontSizesContainer>
          <GenerateButton type="Submit">Generate</GenerateButton>
        </Form>
        {isSubmitted && (
          <MemeMainContainer>
            <MemeContainer data-testid="meme" url={inputs.url}>
              {/* <img src={inputs.url} alt="meme" /> */}
              <MemeContentContainer>
                <MemeText fontSize={`${inputs.fontSize}px`}>
                  {inputs.topText}
                </MemeText>
                <MemeText fontSize={`${inputs.fontSize}px`}>
                  {inputs.bottomText}
                </MemeText>
              </MemeContentContainer>
            </MemeContainer>
          </MemeMainContainer>
        )}
      </ContentContainer>
    </MainAppContainer>
  )
}
