import { useAppSelector } from '../../../app/hooks';
import { Image } from '../../../app/shared-components/Image';
import { LinkButton } from '../../../app/shared-components/LinkButton';
import { List } from '../../../app/shared-components/List';
import { Typography } from '../../../app/shared-components/Typography';
import { IAppState } from '../../../app/store';
import consultationImage from '../../../assets/images/online-consultation.svg';
import therapySessions from '../../../assets/images/therapy-sessions.svg';

const PanelItem = (props: {
  imageUrl: string;
  title: string;
  options: string[];
}) => (
  <div className="flex flex-row p-8">
    <div className="mr-1">
      <Image src={props.imageUrl} alt="" />
    </div>
    <div className="flex flex-col text-left ml-4">
      <Typography
        text={props.title}
        variant="BodyText"
        className="font-semibold"
      />
      <div className="mt-2">
        <List items={props.options} />
      </div>
      <div className="mt-2">
        <LinkButton
          text={
            props.title === 'Free Doctor Consultation'
              ? 'Get Started'
              : 'Book Therapist'
          }
          href={
            props.title === 'Free Doctor Consultation'
              ? 'https://www.getmosh.com.au/quizzes/mental_health_quiz'
              : 'https://www.getmosh.com.au/booking/mental_health'
          }
          className="bg-orange"
        />
      </div>
    </div>
  </div>
);

const RightPanel = () => {
  const options = useAppSelector((state: IAppState) => state.options);

  return (
    <div className="flex flex-col">
      {options.data?.optionValues?.map((value, index) => (
        <div key={index}>
          <PanelItem
            imageUrl={
              value.title === 'Free Doctor Consultation'
                ? consultationImage
                : therapySessions
            }
            title={value.title}
            options={value.values}
          />
        </div>
      ))}
    </div>
  );
};

export default RightPanel;
