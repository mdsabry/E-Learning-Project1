import { motion } from "framer-motion";
import BannerImg from "../../assets/join.png";
const Banner2 = () => {
  return (
    <section>
      <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
        {/* Banner2 Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=' flex flex-col justify-center'>
          <div className=' text-center md:text-left space-y-12'>
            <div className=' text-center md:text-left lg:max-w-[450px] space-y-4'>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=' text-4xl font-bold !leading-snug'>
                Join Our Community To Start Your journey
              </motion.h1>
              <p className=' text-dark2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                sit dolor, beatae alias voluptatibus doloremque illo omnis
                nihil. Cupiditate aut doloremque pariatur saepe non eos minus
                illo autem sapiente officia
              </p>
              <a
                href='https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0'
                className='primary-btn !mt-8'>
                Join Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Banner2 Text */}
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerImg}
            alt='BannerImg'
            className='w-[550px] md:max-w-[650px] object-cover drop-shadow'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
