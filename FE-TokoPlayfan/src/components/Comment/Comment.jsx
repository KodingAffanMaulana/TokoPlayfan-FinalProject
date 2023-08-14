import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'


const Comment = () => {
    const [username, setUsername] = useState("");
    const [commentForm, setCommentForm] = useState("");
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const loadDetail = async () => {
            try {
                const url = `${process.env.REACT_APP_BASE_URL}/comments?videoID=` + id;
                const response = await fetch(url);
                const data = await response.json();
                setComments(data);
                console.log(data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };

        loadDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    const addPhoto = (e) => {
        e.preventDefault();
        const newDatas = {
            username: username,
            comment: commentForm,
            videoID: id
        }

        fetch(`${process.env.REACT_APP_BASE_URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDatas)
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(true);
                if (!data.error) {
                    // Clear input fields
                    setUsername("");
                    setCommentForm("");
                    setLoading(false);
                } else {
                    setError(data.error);
                }
            });
    };

    return (
        <>
            <div className='h-[100%] pb-4 sm:pb-0'>
                <h1 className='text-white font-bold text-center'>Comments</h1>
                <div className='flex flex-col gap-2 mt-4 text-white'>
                    {comments.map(({ _id, username, comment }) => (
                        <div key={_id} className='flex w-[100%] first-letter:items-center gap-1  rounded-lg'>
                            <div className="w-[10%]">
                                <CgProfile className="text-2xl" alt={username} />
                            </div>
                            <p className="w-[90%]">
                                <span className=' text-slate-300'>{username + ' '}
                                </span>
                                {comment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                {error && <div className="error-msg">{error}</div>}
                <form className="add-form flex flex-col gap-2" onSubmit={addPhoto}>
                    <label>
                        <input
                            className="w-full add-input rounded-lg px-2 py-1 text-black"
                            type="text"
                            data-testid="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            className="w-full add-input rounded-lg px-2 py-1 text-black"
                            type="text"
                            data-testid="captions"
                            value={commentForm}
                            placeholder="Comments"
                            onChange={(e) => setCommentForm(e.target.value)}
                        />
                    </label>
                    <label className="flex justify-center">
                        <input className="flex justify-center submit-btn rounded-lg w-[40%] px-2 py-1 hover:bg-red-800 border-2" type="submit" value="Submit" data-testid="submit" />
                    </label>
                </form>
            </div>
        </>
    );
};

export default Comment;
