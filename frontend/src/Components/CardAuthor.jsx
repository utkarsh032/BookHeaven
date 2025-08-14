import { AuthorTemplate } from '../Template/AuthorTemplate'

const popularAuthors = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612c3c5?w=200&h=200&fit=crop',
    bio: 'Bestselling mystery author with over 15 novels. Known for intricate plots and compelling characters.',
    rating: 4.8,
    followers: 125000,
    booksCount: 15,
    genres: ['Mystery', 'Thriller', 'Crime']
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    bio: 'Award-winning science fiction writer exploring themes of technology and human nature.',
    rating: 4.6,
    followers: 89000,
    booksCount: 8,
    genres: ['Sci-Fi', 'Technology', 'Future']
  },
  {
    id: '3',
    name: 'Sophia Williams',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bio: 'Contemporary romance novelist with a passion for emotional storytelling and character development.',
    rating: 4.9,
    followers: 203000,
    booksCount: 22,
    genres: ['Romance', 'Contemporary', 'Drama']
  }
]

const CardAuthor = () => {
  return (
    <div className='flex flex-wrap gap-6'>
      {popularAuthors.map(author => (
        <AuthorTemplate key={author.id} {...author} />
      ))}
    </div>
  )
}

export default CardAuthor
