import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import "../components/less/mainContent.less"
import WineBottleIcon from "./icons/wineBottleIcon";
import LoveWineIcon from "./icons/LoveWineIcon"

const Content = () => {
    const dataList  = useStaticQuery(graphql`
    query MyQuery {
      allPost {
        nodes {
          id
          description
          country
          designation
          price
          points
          province
          region_1
          region_2
          taster_name
          taster_twitter_handle
          title
          variety
          winery
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
        {dataList && dataList.allPost.nodes.map( element => {
          return(
            <Link to={element.title} key={element.id}>
            <WineBottleIcon />
            <h2>
                {element.title}
            </h2>
          </Link>
          );
        })}
      </div>
      </>
    )
}

export default Content;

