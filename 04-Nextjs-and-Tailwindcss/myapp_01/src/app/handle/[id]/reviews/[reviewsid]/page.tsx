import React from "react";

export default function page({ params }: any) {
  return (
    <div>
      Review {params.id} and product {params.reviewsid}
    </div>
  );
}
