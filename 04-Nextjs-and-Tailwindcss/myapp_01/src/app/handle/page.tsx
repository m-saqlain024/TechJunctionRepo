
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
const page = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  const data = await fetch("http://localhost:3000/api").then((res) =>
    res.json()
  );
  return (
    <div className="mt-10 ">
      {data?.map((post: any, index: any): any => {
        return (
          <div key={index}>
            <Link className="text-red-300" href={`/handle/${post.id}`}>
              {post.username}
            </Link>
          </div>
        );
      })}
      {/* <button onClick={() => router.push("/")}>go back to home</button> */}
      <div id="saqi">
        this is a next to scroll to specfic link Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi consequuntur, totam distinctio
        unde dolore eaque! Repudiandae aperiam suscipit dolores ratione, odit
        praesentium, quo reiciendis perferendis ad recusandae commodi eius
        exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Officia officiis excepturi consectetur non perspiciatis minus
        doloribus quos totam sunt cum ipsum, laborum placeat quia reprehenderit.
        Molestias temporibus adipisci maiores ad.
      </div>
    </div>
  );
};
export default page;
