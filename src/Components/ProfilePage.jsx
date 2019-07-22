import React from 'react';

const ProfilePage = () => {
    return (
        <div className="profile">
            <div>
                <img src="https://funkyimg.com/i/2VBgT.jpg" alt="" className="background"/>
            </div>
            <div className="avatar">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
                <div><b>Raman Tamilin.</b></div>
            </div>
            <div className="addPost">
                <div className="caption">My Posts</div>
                <textarea placeholder="your news..."></textarea>
                <button>Add post</button>
            </div>
            <div>
                <div className="avatarSmall">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
                    <div>Hey, why everyone love Dimych?</div>
                </div>
                <div className="avatarSmall">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
                    <div>It's our new program! Hey!</div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;