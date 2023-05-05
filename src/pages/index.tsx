import React, { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log("Counter" + counter);
    return function cleanup() {
      console.log("UnMount" + counter);
    };
  }, []);
  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Knopka
      </Button>
      <Button appearance="ghost" arrow="down">
        Knopka
      </Button>
      <P size="l">Boyuk </P>
      <P size="m">Orta </P>
      <P size="s">Balaca </P>
      <Tag size="s" color="ghost">
        ghost
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
