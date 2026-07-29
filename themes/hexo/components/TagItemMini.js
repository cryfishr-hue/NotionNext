import SmartLink from '@/components/SmartLink'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <SmartLink
  key={tag}
  href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
passHref
className={`cursor-pointer inline-block rounded-md duration-200 mr-2 mb-1 py-1 px-2 text-xs whitespace-nowrap hover:bg-indigo-400 hover:text-white ${selected ? 'text-white bg-black' : 'text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300'}`}>
<div className='font-medium'>#{tag.name}{tag.count ? `(${tag.count})` : ''}</div>
  </SmartLink>
)
}

export default TagItemMini
