import { BsThreeDots } from 'react-icons/bs'

export const BookContentTemplate = ({ bookContent }) => {
  if (!bookContent?.chapters?.length) {
    return <p>No content available.</p>
  }

  return (
    <div className='space-y-10'>
      {bookContent.chapters.map(chapter => (
        <div key={chapter.chapterNumber} className='space-y-3 text-center'>
          {/* Chapter title */}
          <h2 className='text-2xl font-bold text-(--primary)'>
            Chapter {chapter.chapterNumber}: {chapter.title}
          </h2>
          <hr />

          {/* Paragraphs */}
          <div className='space-y-4 text-[var(--foreground)] leading-loose text-left  text-lg '>
            {chapter.paragraphs.map((para, idx) => {
              if (idx === 0) {
                return (
                  <p key={idx}>
                    <span className='text-4xl font-serif'>
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </p>
                )
              }
              return <p key={idx}>{para}</p>
            })}
          </div>
        </div>
      ))}
      <p className='flex justify-center text-4xl text-(--primary)  font-bold'>
        <BsThreeDots />
      </p>
    </div>
  )
}
