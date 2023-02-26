import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

const ImgStyles = {
  boxShadow: "-20px 20px 0px 1px var(--clr-accent)",
  marginTop: "2em",
}

export default function ShowroomSection(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              style={ImgStyles}
              src="../../images/ph.jpg"
              alt="calgary landscaping showroom"
            />
            <Text className="spacing">
              <div>
                <p className="subheader">subheader text</p>
                <h2 className="title">
                  explore our <span className="accent">showroom</span>
                </h2>
              </div>
              <p>
                Your home is your pride and joy, and we are the professionals
                who can help you maintain its outdoor beauty. Increasing your
                property's value and making your yard the envy of the block.
              </p>
              <Flex>
                <div>
                  <p className="bold upper">showroom location</p>
                  <p>Adress here</p>
                </div>
                <div>
                  <p className="bold upper">showroom hours</p>
                  <p>By Appointment</p>
                </div>
              </Flex>
              <ButtonPrimary to="/showroom">explore showroom</ButtonPrimary>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
