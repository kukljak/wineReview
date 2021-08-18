import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout"

import "../components/less/wineInfo.less"

const WineInfo = ({data}) => {
    
    const {title, country, description, designation, province, winery} = data.allPost.nodes[0] ;
    
    return (
        <Layout >
            <div>
              <div className="title">
                <h1>{title}</h1>
              </div>
              <div className="wine-info">
                <div className="description">
                  <h5>Description :</h5>
                  <p>{description}</p>
                </div>
                <div className="designation">
                  <h5>Designation :</h5>
                  <p>{designation===null?"None":designation}</p> 
                </div>
                <div className="country">
                  <h5>Country :</h5>
                  <p>{country}</p> 
                </div>
                <div className="province">
                  <h5>Province :</h5>
                  <p>{province}</p> 
                </div>
                <div className="winery">
                  <h5>Winery :</h5>
                  <p>{winery}</p> 
                </div>
              </div>
                
            </div>
        </Layout>
    )
}

export default WineInfo;

export const query = graphql`
query MyQueryItem($title: String) {
  allPost(filter: {title: {eq: $title}}) {
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
`