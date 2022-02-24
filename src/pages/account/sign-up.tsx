import SignUp from '@components/Forms/SignUp';
import SubHeader from '@components/SubHeader';
import BrandsCarousel from '@components/ui/BrandsCarousel';

export default function CreateAccount() {
  return (
    <>
      <SubHeader title="Sign Up" />
      <SignUp />
      <BrandsCarousel />
    </>
  );
}
