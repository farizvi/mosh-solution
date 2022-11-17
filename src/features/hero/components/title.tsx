import { Typography } from '../../../app/shared-components/Typography';

const Title = () => (
  <div className="flex flex-col items-start ml-8 mr-8 md:mr-12 p-32">
    <Typography
      className="max-w-lg text-bigTitle font-extralight text-blue-4 text-left leading-tight md:leading-snug"
      text="Get back on track"
      variant="Title"
    />

    <Typography className="max-w-xl font-normal text-bodyTextColor mt-7 md:mt-5 text-left mb-5" text="Treatment plan in 24 hours." variant="BodyText" />
    <Typography className="max-w-xl font-normal text-bodyTextColor mt-7 md:mt-5 text-left mb-5" text="Treat anxiety, depression and more" variant="BodyText" />
  </div>
);

export default Title;
