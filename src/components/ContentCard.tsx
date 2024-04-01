
import React from "react";
import { Card, CardBody,Text,Image } from "@chakra-ui/react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { PiHeadphonesDuotone } from "react-icons/pi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { TimeIcon } from "@chakra-ui/icons";
import { BsBookmark } from "react-icons/bs";
import {Content} from "../App.tsx"
import "../App.css"

interface ContentProp {
  content: Content;
}
const ContentCard = ({ content } : ContentProp) => {
      const resizeImage = (uri :String) => {
        if (!uri) return "";
        const parts = uri.split("/");
        parts.splice(3, 0, "resize", "270x120"); // Insert at index 3 (after the domain)
        let newUri = parts.join("/");

        return newUri;
      };

      const resizedImageSrc = resizeImage(content.image.uri);

  return (
    <div>
      <Card maxW="xs" className="card" style={{ borderRadius: "10px" }}>
        <CardBody className="cardbody">
          <div className="image-card">
            <Image
              src={resizedImageSrc}
              alt="Green double couch with wooden legs"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              className="imagetag"
            />
            <div className="headphone-icon">
              <PiHeadphonesDuotone color="white" />
            </div>
            <div className="time-container">
              <TimeIcon color="white" />
              <Text color="white" marginLeft="4px">
                10m
              </Text>
            </div>
            <div className="completed-container">
              <MdOutlineIncompleteCircle color="#FF5900" />
              <Text marginLeft="4px">30% completed</Text>
            </div>
          </div>
          <div className="card-textarea">
            <Text className="category-name" style={{ fontWeight: "500" }}>
              Categories : {content.categories[0].name}
            </Text>
            <div  className="card-name">
              {content.name}
            </div>
            <Text className="expert-name" style={{ fontWeight: "500" }}>
              {content.experts[0].firstName} {content.experts[0].lastName}
            </Text>
            <Text className="company-name" style={{ fontWeight: "700" }}>
              {content.experts[0].company}
            </Text>
          </div>
          <div className="main-icon-area">
            <div className="icon-area">
              <div>
                <AiOutlineShareAlt className="share-icon" color="#FF5900" />
              </div>
              <div
                className="bookmark-icon"
                style={{ marginLeft: "5px", color: "#FF5900" }}
              >
                <BsBookmark />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContentCard;
