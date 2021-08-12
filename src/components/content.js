import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import "./mainContent.css"
import WineBottleIcon from "./icons/wineBottleIcon";
import LoveWineIcon from "./icons/LoveWineIcon"

const Content = () => {
    const dataList  = useStaticQuery(graphql`
      query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
              data {
                points
                title
                description
                taster_name
                taster_twitter_handle
                designation
                variety
                region_1
                province
                country
                winery
              }
            }
          }
        }
      }    
    `);
      
    return(
      <>
      <div className="title">
        <h1>I love <LoveWineIcon /> Wine</h1>
      </div>
      <div className="content">
        {dataList && dataList.allMarkdownRemark.nodes.map( element => {
          return(
            <Link to={element.frontmatter.data.title} key={element.frontmatter.data.title}>
            <WineBottleIcon />
            <h2>
                {element.frontmatter.data.title}
            </h2>
          </Link>
          );
        })}
      </div>
      </>
    )
}

export default Content;

