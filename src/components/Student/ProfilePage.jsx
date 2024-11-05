import { FunctionComponent } from 'react';
import styles from './ProfilePage.module.css';


const ProfilePage = () => {
	return (
		<div className={styles.profilePage}>
			<img className={styles.icon} alt="" src="05 1.png" />
			<div className={styles.profilePageChild} />
			<div className={styles.profilePageItem} />
			<div className={styles.profilePageInner} />
			<div className={styles.groupDiv}>
				<div className={styles.rectangleParent}>
					<div className={styles.groupChild} />
					<div className={styles.frameParent}>
						<div className={styles.frameGroup}>
							<div className={styles.campaignWrapper}>
								<img className={styles.campaignIcon} alt="" src="src\components\img\campaign.png" />
							</div>
							<div className={styles.announcementParent}>
								<div className={styles.announcement}>Announcement!</div>
								<div className={styles.syllabusForInternal}>Syllabus for Internal Exam - 1 has been updated and all the students are requested to</div>
							</div>
						</div>
						<div className={styles.wedWrapper}>
							<div className={styles.wed}>Wed</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.frameContainer}>
				<div className={styles.frameDiv}>
					<div className={styles.ellipseParent}>
						<img className={styles.frameChild} alt="" src="Ellipse 3.png" />
						<div className={styles.evanTonyParent}>
							<div className={styles.evanTony}>Evan Tony</div>
							<div className={styles.btechCe}>B.Tech, CE</div>
						</div>
					</div>
					<img className={styles.moreVertIcon} alt="" src="more_vert.svg" />
				</div>
				<div className={styles.tartILove}>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</div>
			</div>
			<div className={styles.rectangleDiv} />
			<div className={styles.profilePageChild1} />
			<div className={styles.profilePageInner1}>
				<div className={styles.homeParent}>
					<img className={styles.campaignIcon} alt="" src="src\components\img\home.png" />
					<div className={styles.frameWrapper}>
						<div className={styles.myProfileParent}>
							<div className={styles.myProfile}>My Profile</div>
							<div className={styles.gladToSee}>Glad to see you here..</div>
						</div>
					</div>
					<div className={styles.gatewayDigitalWrapper}>
						<div className={styles.gatewayDigital}>IT - A</div>
					</div>
				</div>
			</div>
			<div className={styles.frameParent1}>
				<div className={styles.ellipseGroup}>
					<img className={styles.frameItem} alt="" src="Ellipse 5.png" />
					<div className={styles.changePhotoWrapper}>
						<div className={styles.wed}>Change photo</div>
					</div>
				</div>
				<div className={styles.frameParent2}>
					<div className={styles.evanTonyGroup}>
						<b className={styles.evanTony1}>Evan Tony</b>
						<div className={styles.edit}>Edit</div>
					</div>
					<div className={styles.imEvanTonyContainer}>
						<p className={styles.imEvanTony}>I’m Evan Tony, a Computer Science Engineering student at Ganpat University. My passion for technology drives me to explore and develop innovative solutions, whether through web applications, mobile apps, or emerging technologies.</p>
						<p className={styles.imEvanTony}>&nbsp;</p>
						<p className={styles.imEvanTony}>I've gained hands-on experience with tools like React and Node.js and actively participate in tech communities and hackathons. These experiences have expanded my knowledge and helped me connect with others in the field.</p>
						<p className={styles.imEvanTony}>&nbsp;</p>
						<p className={styles.imEvanTony}>At university, I’m involved with the tech club, where I work on projects and help organize events. I also enjoy staying updated with the latest tech trends and discussing future innovations.</p>
						<p className={styles.imEvanTony}>&nbsp;</p>
						<p className={styles.imEvanTony}>My goal is to keep learning and contribute to impactful tech projects that drive progress and positive change.</p>
					</div>
				</div>
			</div>
			<div className={styles.cardheaderParent}>
				<div className={styles.cardheader}>
					<div className={styles.stackParent}>
						<div className={styles.stack}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Contacts</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.showAll}>Edit</div>
					</div>
					<div className={styles.action} />
				</div>
				<div className={styles.stack1}>
					<div className={styles.stack2}>
						<div className={styles.announcement}>Phone No.</div>
						<div className={styles.text2}>+91 97232 15199</div>
					</div>
					<div className={styles.stack3}>
						<div className={styles.announcement}>Email</div>
						<div className={styles.text2}>evantony@gmail.com</div>
					</div>
					<div className={styles.stack4}>
						<div className={styles.announcement}>GNU Email</div>
						<div className={styles.text2}>evantony@gnu.ac.in</div>
					</div>
					<div className={styles.stack5} />
				</div>
			</div>
			<div className={styles.cardheaderGroup}>
				<div className={styles.cardheader}>
					<div className={styles.stackParent}>
						<div className={styles.stack}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Hobby</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.showAll}>Edit</div>
					</div>
					<div className={styles.action} />
				</div>
				<div className={styles.stack1}>
					<div className={styles.stack2}>
						<div className={styles.announcement}>Playing Football</div>
						<div className={styles.text9}>+91 97232 15199</div>
					</div>
					<div className={styles.stack3}>
						<div className={styles.announcement}>Watching Cricket</div>
						<div className={styles.text11}>evantony@gmail.com</div>
					</div>
					<div className={styles.stack4}>
						<div className={styles.announcement}>Swimming</div>
						<div className={styles.text13}>evantony@gnu.ac.in</div>
					</div>
					<div className={styles.stack5} />
				</div>
			</div>
			<div className={styles.userprofilesocialcard}>
				<div className={styles.cardheader2}>
					<div className={styles.stackContainer}>
						<div className={styles.stack}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Overview</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.edit3}>Edit</div>
					</div>
				</div>
				<div className={styles.stack13}>
					<div className={styles.item}>
						<div className={styles.wed}>Learning UIUX Design!</div>
					</div>
					<div className={styles.item1}>
						<img className={styles.moreVertIcon} alt="" src="icons/solid/ic-mingcute:location-fill.svg" />
						<div className={styles.wed}>Junagadh, Gujarat, India</div>
					</div>
					<div className={styles.item1}>
						<img className={styles.moreVertIcon} alt="" src="icons/solid/ic-solar:case-minimalistic-bold.svg" />
						<div className={styles.wed}>Intern, Kerala Blasters FC</div>
					</div>
				</div>
			</div>
			<div className={styles.cardheaderContainer}>
				<div className={styles.cardheader}>
					<div className={styles.stackParent}>
						<div className={styles.stack}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Attendance</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.showAll}>Show all</div>
					</div>
					<div className={styles.action} />
				</div>
				<div className={styles.stack1}>
					<div className={styles.stack16}>
						<div className={styles.announcement}>Overall</div>
						<div className={styles.text20}>90%</div>
					</div>
					<div className={styles.stack17}>
						<div className={styles.announcement}>CD</div>
						<div className={styles.text20}>92%</div>
					</div>
					<div className={styles.stack18}>
						<div className={styles.announcement}>BDA</div>
						<div className={styles.text20}>84%</div>
					</div>
					<div className={styles.stack19}>
						<div className={styles.announcement}>CP - III</div>
						<div className={styles.text20}>88%</div>
					</div>
					<div className={styles.stack20} />
				</div>
			</div>
			<div className={styles.cardheaderParent1}>
				<div className={styles.cardheader}>
					<div className={styles.stackParent}>
						<div className={styles.stack21}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Internal Marks</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.edit3}>Show all</div>
					</div>
					<div className={styles.action} />
				</div>
				<div className={styles.stack1}>
					<div className={styles.stack23}>
						<div className={styles.announcement}>FCL</div>
						<div className={styles.text2}>18</div>
					</div>
					<div className={styles.stack17}>
						<div className={styles.announcement}>CD</div>
						<div className={styles.text2}>16</div>
					</div>
					<div className={styles.stack18}>
						<div className={styles.announcement}>BDA</div>
						<div className={styles.text2}>12</div>
					</div>
					<div className={styles.stack19}>
						<div className={styles.announcement}>CP - III</div>
						<div className={styles.text2}>14</div>
					</div>
					<div className={styles.stack20} />
				</div>
			</div>
			<div className={styles.userprofilesocialcard1}>
				<div className={styles.cardheader2}>
					<div className={styles.stackContainer}>
						<div className={styles.stack}>
							<div className={styles.avatar} />
							<div className={styles.text}>
								<div className={styles.evanTony}>Certifications</div>
								<div className={styles.subtitle}>subheader</div>
							</div>
						</div>
						<div className={styles.edit3}>Show all</div>
					</div>
				</div>
				<div className={styles.stack29}>
					<div className={styles.stack30}>
						<div className={styles.iconssocialicFacebbook} />
						<div className={styles.wed}>Web Development Lead, Google DSC UVPCE</div>
					</div>
					<div className={styles.stack31}>
						<div className={styles.iconssocialicFacebbook} />
						<div className={styles.text38}>https://www.instagram.com/name</div>
					</div>
					<div className={styles.stack30}>
						<div className={styles.iconssocialicFacebbook} />
						<div className={styles.wed}>Data Scientist Crash Course by Amazon</div>
					</div>
					<div className={styles.stack30}>
						<div className={styles.iconssocialicFacebbook} />
						<div className={styles.wed}>{`Basics about Data, Cloud & Microsoft Azure`}</div>
					</div>
					<div className={styles.stack30}>
						<div className={styles.iconssocialicFacebbook} />
						<div className={styles.wed}>.NET Development by Ankur Walia</div>
					</div>
				</div>
			</div>
			<div className={styles.viewProjectsWrapper}>
				<div className={styles.announcement}>View Projects</div>
			</div>
			<div className={styles.frameParent3}>
				<div className={styles.frameWrapper1}>
					<div className={styles.searchParent}>
						<div className={styles.search}>Search...</div>
						<div className={styles.filterAltParent}>
							<img className={styles.filterAltIcon} alt="" src="filter_alt.svg" />
							<img className={styles.filterAltIcon} alt="" src="search.svg" />
						</div>
					</div>
				</div>
				<div className={styles.groupItem} />
				<div className={styles.groupWrapper}>
					<div className={styles.frameWrapper2}>
						<div className={styles.frameParent4}>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Jack Sparrow</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-A</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Captain Price</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-C</div>
										<div className={styles.mernStack}>IEEE | GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Peter Parker</div>
											<div className={styles.analyst}>B.Tech, ITC</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>ICT-B</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Jack Sparrow</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-A</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Simon Riley</div>
											<div className={styles.analyst}>B.Tech, CE-AI</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-D</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Bobby Charlton</div>
											<div className={styles.analyst}>B.Tech, IT</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-A</div>
										<div className={styles.mernStack}>GDSC | Coding Club</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Soap Jackson</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-B</div>
										<div className={styles.mernStack}>IEEE</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Declan Rise</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-C</div>
										<div className={styles.mernStack}>Coding Club | IEEE</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Harvey Spectre</div>
											<div className={styles.analyst}>B.Tech, IT</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-A</div>
										<div className={styles.mernStack}>Coding Club</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Toni Kroos</div>
											<div className={styles.analyst}>B.Tech, CE-AI</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-D</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Thomas Muller</div>
											<div className={styles.analyst}>B.Tech, IT</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>IT-B</div>
										<div className={styles.mernStack}>IEEE</div>
									</div>
								</div>
							</div>
							<div className={styles.instanceWrapper}>
								<div className={styles.frameParent5}>
									<div className={styles.ellipseContainer}>
										<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
										<div className={styles.myProfileParent}>
											<div className={styles.announcement}>Sergio Ramos</div>
											<div className={styles.analyst}>B.Tech, CE</div>
										</div>
									</div>
									<div className={styles.gatewayDigitalParent}>
										<div className={styles.announcement}>CE-A</div>
										<div className={styles.mernStack}>GDSC</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rectangleGroup}>
					<div className={styles.groupInner} />
					<div className={styles.instanceWrapper10}>
						<div className={styles.frameParent5}>
							<div className={styles.ellipseContainer}>
								<img className={styles.frameInner} alt="" src="Ellipse 2.png" />
								<div className={styles.myProfileParent}>
									<div className={styles.announcement}>Rajpal Yadav</div>
									<div className={styles.analyst}>B.Tech, IT</div>
								</div>
							</div>
							<div className={styles.gatewayDigitalParent}>
								<div className={styles.announcement}>IT - A</div>
								<div className={styles.mernStack}>Coding Club</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>);
};

export default ProfilePage;
