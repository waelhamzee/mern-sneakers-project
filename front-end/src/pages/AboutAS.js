import Credits from "../Credits";
import "../css/MenProducts.css";

const AboutAS = () => {
  return (
    <div>
      <div className="JPI">
        <h3>about us</h3>
        <img
          src={
            "https://i.pinimg.com/236x/af/a9/33/afa933c9251745703e9bedaf27347197.jpg?nii=t"
          }
          alt="black"
          className="jfi"
        />
      </div>
      <div className="P_O">
        <div className="P_OO">
          <img
            src="https://static.wixstatic.com/media/1e47b2_41aad4e1b69948fbb7d27dfd424e1849.jpg/v1/fill/w_779,h_491,al_c,q_85,usm_0.66_1.00_0.01/1e47b2_41aad4e1b69948fbb7d27dfd424e1849.webp"
            alt="Shoes"
            className="animated2"
          />
        </div>
        <div className="PP_Q animated3">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you. ​
          </p>
          <p>&nbsp;</p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
        <div className="OII5">
          <img
            src="https://static.wixstatic.com/media/1e47b2_593dc869252c400cb3768ba034a811bf.jpg/v1/fill/w_505,h_625,al_c,q_80,usm_0.66_1.00_0.01/1e47b2_593dc869252c400cb3768ba034a811bf.webp"
            alt="Owner of AS"
            className="animated4"
          />
          <span>Owner of AS</span>
        </div>
        <div className="KLB_">
          <h2>our stores</h2>
          <p>500 Terry Francois Street</p>
          <p>San Francisco, CA 94158</p>
          <p>info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
          <p>&nbsp;</p>
          <p>500 Terry Francois Street</p>
          <p>San Francisco, CA 94158</p>
          <p>info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
        </div>
        <div className="KLB_ EE_">
          <h2>opening hours</h2>
          <p>Monday - Friday: 11.00 - 18.30</p>
          <p>&nbsp;</p>
          <p>Saturday: 11.00 - 17.00</p>
          <p>&nbsp;</p>
          <p>Sunday: 12.30 - 16.30</p>
        </div>
      </div>
      <div className="credits-image expl top_">
        <div className="les">
          <Credits />
        </div>
      </div>
    </div>
  );
};

export default AboutAS;
