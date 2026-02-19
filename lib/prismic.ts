'use client';

import { createClient } from "@/prismicio";

/**
 * Get all works
 */
export async function getAllWorks() {
  const client = createClient();

  try {
    const works = await client.getAllByType("work", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });

    return works;
  } catch (error) {
    console.error("Error fetching works:", error);
    return [];
  }
}

/**
 * Get single work by UID
 */
export async function getWorkByUID(uid: string) {
  const client = createClient();

  try {
    const work = await client.getByUID("work", uid);
    return work;
  } catch (error) {
    console.error(`Error fetching work with UID: ${uid}`, error);
    return null;
  }
}
