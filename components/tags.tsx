import React from "react";

const Tags: React.FC<{
  desciption: string;
  url: string;
  title: string;
  image: string;
}> = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.desciption} />

      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desciption} />
      <meta property="og:image" content={props.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desciption} />
      <meta name="twitter:image" content={props.image} />
      <meta property="twitter:domain" content="masbossun.dev" />
      <meta property="twitter:url" content={props.url} />
    </>
  );
};

export default Tags;
