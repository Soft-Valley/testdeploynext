const PostPage = ({ post }: any) => {
  return (
    <div className="text-center p-14 max-w-[100rem]  border border-[#3f3f3f] mt-8 mx-auto ">
      <h1 className="text-blue-500 text-3xl mb-5">{post.title}</h1>
      <p>
        {post.body} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Debitis, dolorum saepe quibusdam velit quaerat omnis harum. Provident
        atque, eligendi earum sint accusamus incidunt sunt pariatur vitae dicta,
        amet quidem quae.
      </p>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  try {
    const { postId } = params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();

    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    return {
      props: {
        post: null,
      },
    };
  }
}

export default PostPage;
