import SubHeader from '@components/SubHeader';
import Login from '@components/Forms/Login';
import BrandsCarousel from '@components/ui/BrandsCarousel';

export default function LoginPage() {
  return (
    <>
      <SubHeader title="My Account" />
      <Login />
      <BrandsCarousel />
    </>
  );
}
