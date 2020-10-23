import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import "typeface-noto-serif-jp"
import styled from "styled-components"
import Image from "gatsby-image"
import SearchButtons from "./SearchButtons"
const Projects = ({projects:data,title,page}) => {
  const [projects,setProjects] = React.useState(data);
  // more logic
  const setBackToAll = () =>
  {
    setProjects(data)
  }
  return (
  <Wrapper className="section">
    <Title title={title || "projects"} />
    {page && (
    <SearchButtons 
      projects={data}
      setProjects={setProjects}
      setBackToAll={setBackToAll} 
    />
    )}
    <div className="section">
      {projects.map((item)=>{
        const {id} = item;
        const {name,type,description} = item.data
        const fluid = item.data.image.localFiles[0].childImageSharp.fluid
        return <article key={id}>
          <div className="container">
            <Image fluid={fluid} className="img"/>
            <div className="info">
              <p>-{type}-</p>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        </article>
      })}
    </div>
    {!page && (
    <Link to="/projects" className="btn">
      all menus
    </Link>
    )}
  </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-white);
  .section {
    margin-top: 2rem;
    /* max-width: var(--max-width); */
    display: grid;
    /* gap: 1rem; */
    /* safari workaround */
    /* grid-gap: 2rem; */
    .img {
      /* height: 20rem; */
      height: 80vh;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        bottom: 10%;
        left: 30%;
        transform: translate(-50%, -50%);
        width: 50%;
        opacity: 1;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        font-size: 0.8rem;
        font-family: "Noto Serif JP", serif;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
          font-family: "Noto Serif JP", serif;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        /* height: 15rem; */
        height: 80vh;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        /* height: 12.5rem; */
        height: 80vh;
      }
      grid-template-columns: 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        /* height: 15rem; */
        height: 80vh;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  h3{
    font-family: "Noto Serif JP", serif;
  }
`
export default Projects
