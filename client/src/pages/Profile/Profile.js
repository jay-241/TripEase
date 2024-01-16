//Author: Shani Kachhadiya(sh248902@dal.ca) || Banner Id : B00917757
//Author: Dhrupa Patel(dh409430@dal.ca) || Banner Id: B00912610

import React, { useState, useEffect } from 'react';
import { ProfilePic } from '../../components';
import { LiveUpdateImage } from '../../components';
import { Post } from '../../layouts';
import { IconComponent } from '../../components';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Path from '../../constants/Path';

import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../redux/postReducer';
import { createLiveUpdate } from '../../redux/liveUpdate.reducer';

import { Button } from '../../components';
import EditProfilePopup from '../../components/EditProfile/EditProfile';

import './Profile.css';

const Profile = () => {
	const initialValues = {
		name: 'Shani Kachhadiya',
		location: 'Halifax, CA',
		socialMedia: 'shani.kachhadiya',
		bio: 'Leaving a bit of sparkle everywhere I go ✨',
	};

	const [isOpen, setIsOpen] = useState();
	const [formValues, setFormValues] = useState(initialValues);
	localStorage.setItem('profileData', JSON.stringify(formValues));
	const dispatch = useDispatch();

	const dataProfile = JSON.parse(localStorage.getItem('profileData'));

	useEffect(() => {
		// fetch all posts of particular users
		// Also code included if I would have got user data from user authentication
		// Therefore added static data of user
		axios
			.get(`https://trip-ease-server.onrender.com/post/view/${123}`)
			// .get(`https://trip-ease-server.onrender.com/post/view/${props.userId}`)
			.then(function (response) {
				dispatch(createPost(response.data));
			});
		axios
			.get(`https://trip-ease-server.onrender.com/liveupdate/view/${123}`)
			// .get(`https://trip-ease-server.onrender.com/liveupdate/view/${props.userId}`)
			.then(function (response) {
				dispatch(createLiveUpdate(response.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	const post = useSelector((state) => state.post);
	const liveUpdates = useSelector((state) => state.liveUpdate);
	const [popup, setPopup] = useState(false);
	const popupFunction = () => {
		setPopup(true);
	};

	const settingButtonClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="profile_page_div">
			<div className="profile_container">
				<div className="profile_pic_and_userName">
					<div className="profile_pic_in_profile_page">
						<ProfilePic
							size="large"
							image_url="/Images/profilePic.jpg"
							// image_url={props.userProfileImage}
						/>
					</div>
					<div className="userName_in_profile_page">
						{/* <h1 className="userName">Shani Kachhadiya</h1> */}
						<h1 className="userName">{dataProfile?.name}</h1>
						<div className="location_img_and_location">
							<img
								className="location_image"
								src="./Images/location.jpg"
								alt="location"
							/>
							{/* <span className="location">Halifax, CA</span> */}
							<span className="location">{dataProfile?.location}</span>
						</div>
						<div className="instagram_img_and_userName">
							<img
								className="instagram_image"
								src="./Images/instagram.png"
								alt="instagram"
							/>
							{/* <span className="insta_userName">shani.kachhadiya</span> */}
							<span className="insta_userName">{dataProfile?.socialMedia}</span>
						</div>
						<div className="bio">
							<span className="bio_text">
								{/* Leaving a bit of sparkle everywhere I go ✨ */}
								{dataProfile?.bio}
							</span>
						</div>
					</div>
					<div className="profile_edit_button_in_profile_page">
						<div className="edit_profile_and_setting_btn_div">
							<Button
								type="submit"
								onClick={popupFunction}
								variant="transparent"
								name="Edit Profile"
							/>
							<EditProfilePopup
								trigger={popup}
								setTrigger={setPopup}
								formValues={formValues}
								setFormValues={setFormValues}
							></EditProfilePopup>
							<IconComponent
								className="setting_img_in_profile"
								name="setting"
								onClick={settingButtonClick}
							/>
						</div>
					</div>
					{isOpen && (
						<div
							className="settingsModal"
							color="blue"
						>
							<Link to={Path.EMAIL_UPDATE}>
								<Button
									variant="blue"
									name="Email Address"
								/>
							</Link>
							<Link to={Path.PASSWORD_UPDATE}>
								<Button
									variant="blue"
									name="Change Password"
								/>
							</Link>
							<Link to={'/login'}>
								<Button
									variant="blue"
									name="Logout"
								/>
							</Link>
						</div>
					)}
				</div>
				<div className="live_updates_div">
					{liveUpdates.liveUpdatesData.map((liveUpdates) => {
						return (
							<LiveUpdateImage
								type="horizontal"
								live_update_url={liveUpdates.image}
							/>
						);
					})}
				</div>

				<div className="user_posts_div">
					{post.postData.map((post) => {
						return (
							<Post
								type="user_post"
								postId={post._id}
								userId={post.userId}
								userName={post.userName}
								location={post.location}
								image={post.image}
								description={post.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;
