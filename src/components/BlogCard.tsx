interface BlogCardProps {
    img: string;
    title: string; 
    description: string; 
    link: string;
}

const BlogCard : React.FC<BlogCardProps> = ({title, description, img}) => {
  return (
    <div className="flex flex-col gap-5 
    bg-white rounded-lg p-4">
        <img src={img} alt={title} className="object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default BlogCard