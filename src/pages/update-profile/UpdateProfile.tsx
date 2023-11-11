import { useTitle } from 'react-use';
import Title from '../../components/title/Title';
import SectionChangeProfilePhoto from './update-profile-photo/UpdateProfilePhoto';
import SectionChangePersonalInfo from './update-personal-info/UpdatePersonalInfo';
import './update-profile.scss';

function UpdateProfile() {
  useTitle('Update profile | Dashboard');

  return (
    <div className="update-profile">
      <Title title="Update profile" />
      <SectionChangeProfilePhoto />
      <SectionChangePersonalInfo />
    </div>
  );
}

export default UpdateProfile;
