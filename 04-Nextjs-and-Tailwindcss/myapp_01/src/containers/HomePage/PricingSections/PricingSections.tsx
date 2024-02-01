import { Card } from '@/components'
import React from 'react'


function PricingSections() {
  return (
    <div className='flex justify-between gap-5 h-screen p-12'>
      <Card
        title="free"
        caption="Try out the API and app without any strings attached."
        pricing="0"
        features="API access"
      />
      <Card
        title="free"
        caption="Try out the API and app without any strings attached."
        pricing="0"
        features="API access"
      />
      <Card
        title="free"
        caption="Try out the API and app without any strings attached."
        pricing="0"
        features="API access"
      />
      <Card
        title="free"
        caption="Try out the API and app without any strings attached."
        pricing="0"
        features="API access"
      />
    </div>
  );
}

export default PricingSections
