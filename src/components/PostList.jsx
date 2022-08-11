import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {

	if(!posts.length) {
		return <h3>Have no posts!</h3>
	}
	return (
		<>
			<h2>{title}</h2>
			{posts.map((post, index) => (
				<PostItem post={post} key={post.id} number={index + 1} remove={remove} />
			))}
		</>
	);
}
