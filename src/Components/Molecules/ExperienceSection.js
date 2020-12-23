import React, { Fragment } from "react";

// const ExperienceSection = ({title,date,description}) => {
//   return (
//     <Fragment>
//       <div class="exprience">
//         <div class="exprience-image">
//           <img class="img-fluid" src="images/exprience/1.png" alt="Image" />
//         </div>
//         <div class="exprience-info">
//           <h3>Senior Graphic Designer</h3>
//           <h5>July, 2012 - Present (4 years)</h5>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//             enim ad minim veniam.
//           </p>
//         </div>
//       </div>
//       <hr />
//     </Fragment>
//   );
// };

const ExperienceSection = ({ title, date, description, img, bullets }) => {
  return (
    <Fragment>
      <div className="exprience">
        <div className="exprience-image" style={{ minHeight: "250px" }}>
          <img className="img-fluid" style={{ textAlign: "center", padding: "30px 0" }} src={img} alt="Image" />
        </div>
        <div className="exprience-info">
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
        </div>
      </div>

      <hr />
    </Fragment>
  );
};

export default ExperienceSection;
