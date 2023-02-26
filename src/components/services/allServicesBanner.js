import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section } from "../layoutComponents"
import { Link } from "gatsby"
import { ButtonPrimary } from "../buttons"

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
`

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const ItemLink = styled(props => <Link {...props} />)`
  position: relative;
  border-top: 6px solid var(--clr-accent);
  .service-img {
    z-index: 1;
    height: 400px;
  }
  h3 {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--clr-dark);
  }

  &:hover {
    .overlay {
      opacity: 0.8;
      z-index: 2;
    }
    h3 {
      z-index: 3;
    }
  }
`

export default function AllServicesBanner() {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <p className="subheader accent">find the service you need</p>
          <h2 className="title">
            take a closer look at our calgary landscaping services
          </h2>
        </Text>
        <GridAuto>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink to="">
            <StaticImage
              className="service-img"
              src="../../images/ph.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">service title</h3>
            <div className="overlay"></div>
          </ItemLink>
        </GridAuto>
        <ButtonPrimary to="">view all services</ButtonPrimary>
      </Container>
    </Section>
  )
}
