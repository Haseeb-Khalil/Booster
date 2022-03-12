// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../components/energiser-Imgs/Mock-Image.png";

import "./Home.css";
import logo from "./logo.svg";
import Footer from "../footer/Footer";

// Mock Data

const energisers = [
	{
		Name: "Kahoot",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "1",
	},
	{
		Name: "Gartic.io",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "2",
	},
	{
		Name: "Find the Colour",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "3",
	},
	{
		Name: "Vacation Destination",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "4",
	},
	{
		Name: "Favorite Movie Star",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "5",
	},
	{
		Name: "Best Friend ",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "6",
	},
	{
		Name: "Emoji",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "7",
	},
	{
		Name: "Weird Talent",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "8",
	},
	{
		Name: "Bucket List",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "9",
	},
	// {
	// 	Name: "Fav Youtube Video",
	// 	Image: IMG,
	// 	Description:
	// 		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	// 	link: "https://sample.com",
	// 	id: "10",
	// },
];

export function Home() {
	// const [energizers, setEnergizers] = useState();

	//================================Will need it fetch actual data=========================================//

	// useEffect(() => {
	// 	fetch(api)
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			console.log(body)
	// 			setEnergisers(body);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
<section className="h-100 gradient-form" >

<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
	<div className="col-xl-10">
	  <div className="card rounded-3 text-black">
		<div className="row g-0">
  <div className="col-lg-6 d-flex gradient-custom-2">
			<div className="text-white px-3 py-4 p-md-5 mx-md-4">
			  <h4 className="mb-4">Get Boosted Before the Meeting</h4>
			  <p className="small mb-0">Choose an energiser by Booster.Booster can boost your mood and energy before a meeting.
  <br /> <br /> Do not think too much! You are able to randomly quickly pick an energizer.</p>
			</div>
		  </div>
		  <div className="col-lg-6">
			<div className="card-body p-md-5 mx-md-4">

			  <div className="text-center">
			  <div className="d-flex align-items-center justify-content-center pb-4">
				  <p className="mb-0 me-2">Don't have an account?</p>
				  <button type="button" className="btn btn-outline-danger">Sign up</button>
				</div>

				<h4 className="mt-1 mb-5 pb-1">Welcome to BOOSTER!</h4>
			  </div>

			  <form>
				<div className="form-outline mb-4">
				  <input type="email" id="form2Example11" className="form-control" placeholder="E-Mail address" />

				</div>

				<div className="form-outline mb-4">
				  <input type="password" id="form2Example22" className="form-control" placeholder="Password" />
				</div>

				<div className="text-center pt-1 mb-5 pb-1">
				  <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log in</button>
				  <a className="text-muted" href="#!"> Forgot password?</a>
				</div>

			  </form>

			</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</div>
</section>
			{/* Haseeb */}
			<div className="booster__hero">
				<div className="hero__text">
					<h5>To Get Boosted Choose One Of The Following</h5>
					<h2>Energisers</h2>
				</div>
			</div>

			<section id="energisers">
				<div className="container energisers__container">
					{energisers ? (
						energisers.map((energiser) => {
							console.log(energiser);
							return (
								<article key={energiser.id} className="energiser__item">
									<div>
										<h2>{energiser.Name}</h2>
									</div>
									<div className="energiser__item-image">
										<img
											src={energiser.Image}
											alt="Fake-logo"
											className="energiser__img"
										/>
									</div>
									<div>
										<p>{energiser.Description}</p>
									</div>
									<div className="energiser__item-buttons">
										<a href={energiser.link} className="btn">
											Play
										</a>
										<button className="btn">Add to favorite</button>
									</div>
								</article>
							);
						})
					) : (
						<p>Loading ...</p>
					)}
				</div>
			</section>
			{/* Adem */}
			<section className="random">
<div className="text-center pt-1 mb-5 pb-1">
	<button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Pick a Random Energiser</button>
	</div>
</section>
<section className="team-section text-center my-5">


  <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

  <p className="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>


  <div className="row text-center">


    <div className="col-md-4 mb-md-0 mb-5">

      <div className="testimonial">

        <div className="avatar mx-auto">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).webp" className="rounded-circle z-depth-1 img-fluid" alt="ph1" />
        </div>

        <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
        <h6 className="font-weight-bold blue-text my-3">Web Designer</h6>
        <p className="font-weight-normal dark-grey-text">
          <i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>

        <div className="orange-text">
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star-half-alt"> </i>
        </div>
      </div>

    </div>

    <div className="col-md-4 mb-md-0 mb-5">

      <div className="testimonial">

        <div className="avatar mx-auto">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).webp" className="rounded-circle z-depth-1 img-fluid" alt="ph" />
        </div>

        <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
        <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
        <p className="font-weight-normal dark-grey-text">
          <i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid commodi.</p>

        <div className="orange-text">
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
        </div>
      </div>

    </div>

    <div className="col-md-4">

      <div className="testimonial">

        <div className="avatar mx-auto">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).webp" className="rounded-circle z-depth-1 img-fluid" alt="ph2" />
        </div>

        <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
        <h6 className="font-weight-bold blue-text my-3">Photographer</h6>
        <p className="font-weight-normal dark-grey-text">
          <i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.</p>

        <div className="orange-text">
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="fas fa-star"> </i>
          <i className="far fa-star"> </i>
        </div>
      </div>

    </div>


  </div>


</section>
<section>
<div className="text-center pt-1 mb-5 pb-1">
	<h3 className="bg-primary btn-block fa-lg gradient-custom-2 mb-3">Effortless Energiser</h3>

	<p>Do the things you do,but better!</p>
	</div>
</section>
{/* Adem */}
{/* Haseeb */}
			<Footer />
			<Link to="/about/this/site">About</Link>
			{/* Haseeb */}
		</main>
	);
}

export default Home;
