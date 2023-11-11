import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../../hooks/use-auth';
import { useData } from '../../hooks/use-data';
import { countries } from '../../data/countries';
import { languages } from '../../data/languages';
import { genders } from '../../data/genders';
import { UpdateIconOutlined } from '../../components/Icons';
import Avatar from '../../components/ui/avatar/Avatar';
import Title from '../../components/title/Title';
import './profile.scss';

function Profile() {
  useTitle('Profile | Dashboard');
  const { user } = useAuth();
  const {
    userData: {
      dateOfBirth,
      gender,
      country,
      language,
      phoneNumber,
      createdAt,
      updatedAt,
    },
  } = useData();
  const dateOfBirthFormatted = dateOfBirth
    ? format(dateOfBirth, 'PPP')
    : 'Unknown';
  const countryLabel = country
    ? countries.find((countryItem) => countryItem.value === country)?.label
    : 'Unknown';
  const languageLabel = language
    ? languages.find((languageItem) => languageItem.value === language)?.label
    : 'Unknown';
  const genderLabel = gender
    ? genders.find((genderItem) => genderItem.value === gender)?.label
    : 'Unknown';

  return (
    <div className="profile">
      <Title title="Profile" />
      <section className="section-main-data">
        <div className="main-data">
          <Avatar src={user!.photoURL!} alt={user!.displayName!} />
          <div className="data">
            <span className="name">{user!.displayName}</span>
            <span className="email">{user!.email}</span>
          </div>
        </div>
        <div className="update-main-data">
          <Link
            to="/profile/update"
            className="update-link button-shape default-size outline"
          >
            Update profile
          </Link>
        </div>
      </section>
      <section className="section-personal-data">
        <div className="section-header">
          <h2 className="section-title">Personal data</h2>
          <Link
            to="/profile/update"
            className="update-link button-shape ghost icon"
          >
            <UpdateIconOutlined />
          </Link>
        </div>
        <div className="section-content">
          <div className="data">
            <h3 className="data-title">Data of birth</h3>
            <p className="data-value">{dateOfBirthFormatted}</p>
          </div>
          <div className="data">
            <h4 className="data-title">Country</h4>
            <p className="data-value">{countryLabel}</p>
          </div>
          <div className="data">
            <h4 className="data-title">Gender</h4>
            <p className="data-value">{genderLabel}</p>
          </div>
          <div className="data">
            <h4 className="data-title">Language</h4>
            <p className="data-value">{languageLabel}</p>
          </div>
          <div className="data">
            <h4 className="data-title">Phone number</h4>
            <p className="data-value">{phoneNumber || 'Unknown'}</p>
          </div>
        </div>
      </section>
      <section className="section-website-info">
        <h2 className="section-title">Website info</h2>
        <p className="section-description">
          You have joined the website at{' '}
          <span className="date">{format(createdAt, 'PPP')}</span>
        </p>
        <p className="section-description">
          The last time You have changed your data was at{' '}
          <span className="date">{format(updatedAt, 'PPP')}</span>
        </p>
      </section>
    </div>
  );
}

export default Profile;
