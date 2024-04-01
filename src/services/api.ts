import axios from "axios";

const API_URL = "https://api.tigerhall.net/v2";

export const fetchContent = async (keywords:String) => {
  try {
    const response = await axios.post(`${API_URL}/`, {
      query: `
        {
          contentCards(filter: { limit: 20, keywords: "${keywords}", types: [PODCAST] }) {
            edges {
              ... on Podcast {
                name
                image {
                  uri
                }
                categories {
                  name
                }
                experts {
                  firstName
                  lastName
                  title
                  company
                }
              }
            }
          }
        }
      `,
    });

    return response.data.data.contentCards.edges;
  } catch (error) {
    console.error("Error fetching content cards:", error);
    return [];
  }
};
