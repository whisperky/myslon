"use client";

import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { ChapterViewer } from "@/components/ChapterViewer";
import { fetchTempChapters } from "@/services/tempdata";

const ReadStoryPage: React.FC = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Container maxW="container.xl" py={8}>
        <ChapterViewer
          storyId="mystery-babylon"
          fetchChapters={fetchTempChapters}
        />
      </Container>
    </Box>
  );
};

export default ReadStoryPage;
