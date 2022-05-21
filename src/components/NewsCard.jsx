import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

export default function NewsCard(props) {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === "dark";

  return (
    <div className="my-3">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src={
              props.News_Image_Url
                ? props.News_Image_Url
                : "https://images-ext-1.discordapp.net/external/FkKqIohvc-LiYxj5Fy0D41XccReIWCcegOgALnCL3Es/https/openai.com/content/images/2022/04/dall-e-2-og.jpg?width=946&height=567"
            }
            height={160}
            alt={props.News_Title}
          />
        </Card.Section>

        <Group
          style={{
            marginBottom: 5,
            marginTop: theme.spacing.xs,
            marginLeft: 0,
          }}
        >
          <Badge color="blue" variant="outline">
            {props.News_Company}
          </Badge>
          <Badge color="blue" variant="light">
            {props.News_Author}
          </Badge>
          <Badge color="blue" variant="filled">
            {props.News_Time}
          </Badge>
        </Group>

        <Group
          position="apart"
          style={{
            marginBottom: 5,
            marginTop: theme.spacing.sm,
            fontWeight: "bolder",
            color: "white",
          }}
        >
          <Text weight={500}>{props.News_Title}</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.News_Content
            ? props.News_Content
            : "To Know More About The News , Click Read More"}
        </Text>
        <a href={props.News_Url} target="_blank" rel="noopener noreferrer">
          {" "}
          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Read More
          </Button>
        </a>
      </Card>
    </div>
  );
}
