import styled from "styled-components"

//import social media icons
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HomeFooter = () => {
  return (
    <FoldSixteen>
    <Wrapper>
        <Box />
        <InnerWrap>
          <SiteMap>
            <About>
              <Title>About TrueNeuro</Title>
              <div>Alan Rowe Foundation</div>
              <div>TrueNeuro Beliefs</div>
              <div>Backgrounds and Origins</div>
              <div>Ethics and Compliance</div>
              <div>Codes and Creeds</div>
              <div>Inside the Institutions</div>
              <div>Carreer Oppertunities</div>
              <div>Products</div>
            </About>
            <Services>
                <Title>Beginner Services</Title>
              <div>Transition Seminars</div>
              <div>The Way to Happiness</div>
              <div>Adjusting to Coming Changes</div>
              <div>Personal Efficiency</div>
              <div>Successful Communication</div>
              <div>Tools for a Life Uploaded</div>
              <div>Prepare your Loved Ones</div>
              <div>Fundamentals of Thought</div>
            </Services>
            <Assistance>
              <Title>Assistance</Title >
              <div>Financial Assistance</div>
              <div>Emotional Support</div>
              <div>After Buddy-System</div>
              <div>Drug Interventions</div>
              <div>Holistic Synergetics</div>
              <div>Guidance for Dissociation</div>
              <div>Mental Health Checklist</div>
            </Assistance>
            <Contact>
              <Title>Contact Us</Title>
              <div>Customer Support</div>
              <div>Legal Offices</div>
              <div>Finacial Center</div>
              <div>Locate an Institution</div>
              <SocialMedia>
                <BsTwitter />
                <BsLinkedin />
                <BsYoutube />
                <BsFacebook />
                <BsInstagram />
              </SocialMedia>
            </Contact>
          </SiteMap>
        </InnerWrap>
        <FinePrint >
          <div style={{fontSize: "10px"}}>* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec enim. Enim lobortis scelerisque fermentum dui faucibus in ornare. Lacus laoreet non curabitur gravida. Sed augue lacus viverra vitae congue eu. Proin libero nunc consequat interdum varius sit. Eu scelerisque felis imperdiet proin fermentum. Praesent tristique magna sit amet purus gravida quis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt dui ut ornare lectus. ** Pharetra vel turpis nunc eget lorem dolor sed viverra. Egestas integer eget aliquet nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mattis enim ut tellus elementum. Amet facilisis magna etiam tempor orci. Dolor sit amet consectetur adipiscing elit duis. Placerat vestibulum lectus mauris ultrices. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Pharetra et ultrices neque ornare aenean euismod elementum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Aliquet lectus proin nibh nisl condimentum id venenatis. Ac tincidunt vitae semper quis lectus nulla at. Nec ullamcorper sit amet risus nullam eget felis eget. *** Et netus et malesuada fames. Ut enim blandit volutpat maecenas volutpat blandit. Sed enim ut sem viverra. Elit duis tristique sollicitudin nibh sit amet commodo. Ultricies tristique nulla aliquet enim tortor at auctor. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae auctor eu augue ut lectus arcu bibendum at. Eget nullam non nisi est sit amet facilisis magna. Tellus molestie nunc non blandit. Nisl pretium fusce id velit ut. Gravida neque convallis a cras semper auctor neque. Tortor posuere ac ut consequat semper viverra. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Aliquet enim tortor at auctor urna nunc id cursus metus.* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec enim. Enim lobortis scelerisque fermentum dui faucibus in ornare. Lacus laoreet non curabitur gravida. Sed augue lacus viverra vitae congue eu. Proin libero nunc consequat interdum varius sit. Eu scelerisque felis imperdiet proin fermentum. Praesent tristique magna sit amet purus gravida quis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt dui ut ornare lectus. ** Pharetra vel turpis nunc eget lorem dolor sed viverra. Egestas integer eget aliquet nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis. Mattis enim ut tellus elementum. Amet facilisis magna etiam tempor orci. Dolor sit amet consectetur adipiscing elit duis. Placerat vestibulum lectus mauris ultrices. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Pharetra et ultrices neque ornare aenean euismod elementum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Aliquet lectus proin nibh nisl condimentum id venenatis. Ac tincidunt vitae semper quis lectus nulla at. Nec ullamcorper sit amet risus nullam eget felis eget. *** Et netus et malesuada fames. Ut enim blandit volutpat maecenas volutpat blandit. Sed enim ut sem viverra. Elit duis tristique sollicitudin nibh sit amet commodo. Ultricies tristique nulla aliquet enim tortor at auctor. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae auctor eu augue ut lectus arcu bibendum at. Eget nullam non nisi est sit amet facilisis magna. Tellus molestie nunc non blandit. Nisl pretium fusce id velit ut. Gravida neque convallis a cras semper auctor neque. Tortor posuere ac ut consequat semper viverra. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Aliquet enim tortor at auctor urna nunc id cursus metus.</div>
          <Copyright>
            <div >Ⓒ 2022 TrueNeural. All Rights Reserved.</div>
            <div>Privace Notive · Cookie Policy · Terms of Use · Legal Notice</div>
          </Copyright>
        </FinePrint>
    </Wrapper>
    </FoldSixteen>
  )
}

export default HomeFooter

const FoldSixteen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid blue; */
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Box = styled.div`
width: 100%;
height: 100%;
background: #F1F0EA;
flex:1;
`
const InnerWrap = styled.div`
  flex:2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SiteMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex:2;
  line-height: 28px;
  color: #786F6F;

`
const Title = styled.div`
  font-weight: 700;
`

const About = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`
const Services = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`
const Assistance = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`
const Contact = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-direction: column;
`
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 25px;
  position: relative;
  top: 40px;
`
const FinePrint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  color:#989898;
  padding: 0 10px 10px 10px;
  text-align: justify;
  text-align-last: left;
`
const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1px;
`