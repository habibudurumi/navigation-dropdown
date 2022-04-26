/** @format */

import Navbar from "./components/Navbar";
import heroImage from "./images/image-hero-mobile.png";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";
import heroDesktop from "./images/image-hero-desktop.png";
import Container from "./components/Container";
import Text from "./components/Text";
import Heading from "./components/Heading";
import ActionBtn from "./components/ActionBtn";
import Sponsors from "./components/Sponsors";
import Logo from "./components/Logo";

function App() {
  return (
    <div className='min-h-screen lg:max-w-[1440px] font-epilogue bg-gray-200 bg-opacity-50 relative box-border'>
      <Navbar />
      <div>
        <Logo heroImage={heroImage} />
        <Container>
          <div>
            <Heading />
            <Text>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </Text>

            {/* cta button */}
            <ActionBtn />

            {/* logo */}
            <Sponsors
              maker={maker}
              meet={meet}
              databiz={databiz}
              audiophile={audiophile}
            />
          </div>

          {/* hero image */}
          <img
            src={heroDesktop}
            alt='hero desktop'
            className='lg:w-[370px] md:w-[300px] lg:h-[490px] md:h-[400px] mt-[-2rem] ml-[4rem] sm:hidden md:block lg:block'
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
