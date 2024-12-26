import React, { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  // 1. useEffect(callback)
  // - Gọi callback sau khi component thêm element vào DOM
  // - Gọi callback sau khi component re-render
  // 2. useEffect(callback, [])
  // - Chỉ gọi callback 1 lần sau khi component mounted
  // 3. useEffect(callback, [deps])
  // - Callback sẽ được gọi lại mỗi khi deps thay đổi

  // Callback luôn được gọi sau khi component mounted
  // Clean up function luôn được gọi trước khi component unmounted
  // Clean up function luôn được gọi trước khi callback được gọi (trừ lần mount đầu tiên)

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGotoTop, setShowGotoTop] = useState(false);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json()) // res.jon để chuyển dữ liệu từ dạng json sang dạng object
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGotoTop(true);
      } else {
        setShowGotoTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGotoTop && (
        <button
          style={{
            position: "fixed",
            right: 10,
            bottom: 10,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
