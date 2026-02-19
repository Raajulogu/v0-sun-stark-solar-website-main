
import ProjectDetail from '@/components/WorksDetailsPage'

import { getWorkByUID } from "@/lib/prismic";

// export async function generateMetadata({ params }) {
//   const work = await getWorkByUID(params.uid);

//   if (!work) return {};

//   return {
//     title: work.data.project_title,
//     description: work.data.description?.[0]?.text?.slice(0, 150),
//   };
// }


export default function Page() {

  return (
    <ProjectDetail/>
  )
}
