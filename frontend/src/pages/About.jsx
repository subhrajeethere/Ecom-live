import Title from './../components/Title';
import { assets } from './../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>PureLoom is a modern lifestyle and fashion brand dedicated to delivering high-quality, stylish, and comfortable products that elevate everyday living. We focus on craftsmanship, premium materials, and timeless designs that blend functionality with aesthetics.</p>

          <p>Every product from PureLoom is created with attention to detail, ensuring durability, comfort, and a premium experience for our customers.</p>


          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to make premium quality accessible to everyone by offering products that are thoughtfully designed, sustainably made, and crafted to last. At PureLoom, we believe in honesty, transparency, and customer-first values.</p>
        </div>

      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>  

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Asssurance:</b>
              <p className='text-gray-600'>Premium materials and strict quality checks ensure you always get the best.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Fast delivery, easy returns, and a seamless shopping experience every time.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Friendly, responsive support dedicated to helping you at every step.</p>
          </div>

      </div>


    <NewsletterBox/>

    </div>
  )
}

export default About
