import React from "react";
import "./HomePost.scss";
import UpperHeader from "./UpperHeader";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import MobileHeader from "./MobileHeader";

const HomePost = () => {
  return (
    <div className="homePost">
      <MobileHeader />
      <UpperHeader />
      <CreatePost />
      <AllPosts img="https://img.freepik.com/free-photo/portrait-beautiful-brunette-with-long-hair_144627-16306.jpg?w=360&t=st=1707016310~exp=1707016910~hmac=1f151c2e9e755bcc1c2e081b0c342fa39676b1bf564734d1bbd3bbc0ff184d36" />
      <AllPosts />
      <AllPosts img="https://img.freepik.com/free-photo/smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-happy-family-taking-selfie-self-portrait-themselves-smartphone-camera-shows-peace-sign-winking-street_158538-5459.jpg?t=st=1707016123~exp=1707016723~hmac=9dbbbc65fb190ac0e39c9016a6d568a7f7621c5f254fd45c04b772d19ce1f8db" />
      <AllPosts />
      <AllPosts />
      <AllPosts img="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?w=360&t=st=1707016255~exp=1707016855~hmac=da6ff863e5721f471b2e8db61d559043d533afee1b87a0b4f07711778537abb6" />
      <AllPosts />
      <AllPosts />
      <AllPosts img="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8108.jpg?w=996&t=st=1707016288~exp=1707016888~hmac=357c42fedee2e9f7d578a6bb515f7ac6a46597968cebb63deb93b9489e82bd31" />
      <AllPosts />
      <AllPosts />
      <AllPosts img="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=360&t=st=1707016240~exp=1707016840~hmac=c547336a9ac7efb236b1f2f6abc177c3dfafc3b1b8c64f8fa73825f65de8b7d8" />
      <AllPosts />
    </div>
  );
};

export default HomePost;
