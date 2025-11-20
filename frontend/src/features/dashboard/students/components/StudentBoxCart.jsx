import { Icon } from '@iconify/react'

function StudentBoxCart({item}) {
  const logo = item?.name.slice(0,2).toUpperCase();

  return (
    <div className="hover:shadow-md w-80 h-80  bg-[#5d9f9f] rounded-lg border border-slate-100 " >
      <div className='w-full flex gap-2 items-center relative  p-5'>
        <div className='w-14 h-14 text-xl font-semibold font-[sans-serif] text-white flex items-center justify-center bg-[#336464] rounded-full'>
            {logo }
        </div>
        <div>
            <h1 className='text-xl font-semibold font-[sans-serif] text-white'>{item.name} {item.last_name}</h1>
            <h1 className='text-white text-sm'>STU001</h1>
        </div>
        <span className='absolute px-3 right-3 text-white top-3 bg-[#336464] text-[12px] font-bold p-0.5 rounded-xl'>{item.status}</span>
      </div>

      <div className='flex flex-col gap-3 px-6 '>
        <div className='flex gap-3 items-center'>
            <Icon icon="line-md:email-twotone" width="24" height="24"  style={{color:'#336464'}} />
            <span className='text-white'>{item.email}</span>
        </div>
        <div className='flex gap-3 items-center'>
            <Icon icon="line-md:phone-twotone" width="24" height="24"  style={{color:'#336464'}} />
            <span className='text-white'>+93796826004</span>
        </div>
        <div className='flex gap-3 items-center'>
            <Icon icon="basil:location-outline" width="24" height="24"  style={{color:'#336464'}} />
            <span className='text-white'>Afghanistan / Herat</span>
        </div>
        <div className='flex gap-3 items-center border-b border-white pb-5 px-1'>
            <Icon icon="fluent-mdl2:publish-course" width="20" height="20"  style={{color:'#336464'}} />
            <span className='text-white'>2 Subject</span>
        </div>
      </div>
      
      <div className='px-6 py-2 flex justify-between'>
        <button className='bg-[#336464] p-2 px-12 flex justify-center items-center gap-3 rounded-md border border-white '>
            <Icon icon="lucide:edit" width="20" height="20"  style={{color: '#fff'}} />
            <span className='text-white font-semibold'>Edit</span>
        </button>
        <button className='bg-[#336464] p-2 px-3 flex justify-center items-center gap-3 rounded-md border border-white '>
            <Icon icon="carbon:view" width="20" height="20"  style={{color: '#fff'}} />
        </button>
        <button className='bg-[#336464] p-2 px-3 flex justify-center items-center gap-3 rounded-md border border-white '>
            <Icon icon="material-symbols:delete-outline-rounded" width="22" height="22"  style={{color: '#fff'}} />
        </button>
      </div>
    </div>
  )
}

export default StudentBoxCart
