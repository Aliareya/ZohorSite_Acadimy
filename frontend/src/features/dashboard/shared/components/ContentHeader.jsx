import React from 'react'
import DashboardStatusCart from '../ui/DashboardStatusCart';
import Button from '../ui/Button';

function ContentHeader({title ,desc ,data  }) {
  return (

    <div className='w-full h-auto pt-3 '>
      <div className='w-full flex justify-between items-center'>
        <div>
          <h1 className="text-[33px] text-[#338585] font-bold">{title}</h1>
          <p className="text-md text-gray-600 pt-0 ">{desc}</p>
        </div>
        <Button title={title} icon={"material-symbols:add-rounded"} />
      </div>
      <div className="w-full pt-5 flex gap-4">
        {data.map((item, index) => {
          return <DashboardStatusCart item={item} key={index} />;
        })}
      </div>
    </div>
  )
}


export default ContentHeader
