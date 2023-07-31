import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const VerifiedTeacher = () => {
  const theme = useTheme();
  return (
    <div className="text-[12px] md:text-[16px] flex flex-col space-y-4 items-center ">
      <Avatar
        alt="verifiedteacher"
        src="/onaylımukemmel/burak.jpg"
        sx={{
          width: 100,
          height: 100,
          [theme.breakpoints.down('sm')]: {
            width: 70,
            height: 70,
          },
        }}
        className="border mb-2"
      />
      <p className="mb-4">Burak Bozkurt</p>
      <p className="">Geometri</p>
      <div
        className="flex flex-row space-x-1"
        style={{ color: 'var(--banabi)' }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <StarIcon key={index} style={{ color: 'var(--banabi)' }} />
        ))}
      </div>
    </div>
  );
};

export default VerifiedTeacher;
