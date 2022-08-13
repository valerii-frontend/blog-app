import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default function PostList({ posts, title, remove }) {

	if(!posts.length) {
		return <h3>Have no posts!</h3>
	}
	return (
		<>
			<h2>{title}</h2>
				<TransitionGroup>
					{posts.map((post, index) => (
						<CSSTransition timeout={500} key={post.id} classNames='post'>
							<PostItem   number={post.id} remove={remove} post={post}/>
						</CSSTransition>
					))}
				</TransitionGroup>
		</>
	);
}
