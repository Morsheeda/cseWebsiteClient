import { useContext, useState } from "react";
import TopBar from "../../components/topbar/Topbar";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  
  console.log(user.roll);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      author: user.name,
      authorRoll: user.roll,
      authorBatch: user.batch,
      authorPhoto: user.profilePic,
      authorDepartment: user.department,
      authorEmail: user.email,
      authorFbLink: user.fbLink,
      authorTwitterLink: user.twitterLink,
      authorLinkedinLink: user.linkedinLink,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };
  return (
    <>
      <TopBar />
      <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i title="Click to add a cover photo to your blog" className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              className="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              required
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className=" textEditor">
            {/* <textarea
            placeholder="Share your thoughts with the world..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea> */}
            <CKEditor
              className=" writeText"
              editor={ClassicEditor}
              // placeholder="Share your thoughts to the world..."
              data=""
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                // setDesc(event.target.value)
                const data = editor.getData();
                setDesc(data)

                console.log({ event, editor, data });
              }}
              config={{
                // required:"true",
                placeholder: "Share your thoughts with the world...",
                ckfinder: {
                  uploadUrl: "http://localhost:5000/api/images/"
                },
                toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'insertTable',
                  'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

{/* <div className="regInputPP">

          <label >Profile Picture</label>
          <label htmlFor="fileInput"> <i title="Click to upload your profile picture" className="registerIcon fas fa-plus"></i></label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="">
            {file && (
              <img className="registerPP" src={URL.createObjectURL(file)} alt="" />
            )}
          </div>
        </div> */}